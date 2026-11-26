"use server";

import { Resend } from "resend";
import { copy } from "@/data/copy";
import { EMAIL } from "@/data/links";

export type ContactState = {
  status: "idle" | "sent" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "need" | "message", string>>;
};

const DEFAULT_MIN_FILL_MS = 3000;

// Whole milliseconds only. A typo like "3s" must not silently disable the check.
function readMinFillMs(): number {
  const raw = process.env.CONTACT_MIN_FILL_MS;
  if (raw === undefined) return DEFAULT_MIN_FILL_MS;
  const trimmed = raw.trim();
  if (/^\d{1,7}$/.test(trimmed)) return Number(trimmed);
  console.warn(`CONTACT_MIN_FILL_MS="${raw}" is not a whole number of milliseconds; using ${DEFAULT_MIN_FILL_MS}.`);
  return DEFAULT_MIN_FILL_MS;
}

const MIN_FILL_MS = readMinFillMs();

// No display name, no angle brackets, so the address cannot carry a second identity.
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

// C0 and C1 control characters, DEL, line/paragraph separators and bidi overrides.
// Zero-width joiners are kept: Urdu and emoji need them.
const CONTROL_RE = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f\u2028\u2029\u202a-\u202e\u2066-\u2069]/g;

// Turnstile is only enforced when both halves are configured, so a half-finished
// setup cannot silently reject every real visitor.
const TURNSTILE_ENABLED =
  !!process.env.TURNSTILE_SECRET_KEY && !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// Strips control characters; single-line fields also lose line breaks.
function clean(formData: FormData, key: string, max: number, multiline = false) {
  let value = String(formData.get(key) ?? "").replace(CONTROL_RE, "");
  if (!multiline) value = value.replace(/[\r\n]+/g, " ");
  return value.trim().slice(0, max);
}

async function turnstileOk(token: string): Promise<boolean> {
  if (!TURNSTILE_ENABLED) return true;
  if (!token) {
    console.error("contact: Turnstile token missing");
    return false;
  }
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY!, response: token }),
    });
    const data = (await res.json()) as { success?: boolean };
    if (data.success !== true) console.error("contact: Turnstile rejected the token");
    return data.success === true;
  } catch (err) {
    console.error("contact: Turnstile verification failed", err);
    return false;
  }
}

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const fallback: ContactState = { status: "error", message: copy.contact.error_text };

  // Bots fill the honeypot; people never see it. Answer with a quiet "sent".
  if (clean(formData, "hp_9c2", 500)) {
    console.warn("contact: honeypot hit");
    return { status: "sent" };
  }

  // The browser measures how long the form was open and sends the duration, so a
  // visitor whose clock is wrong is never mistaken for a bot. Missing means no JavaScript.
  const elapsed = Number(clean(formData, "elapsedMs", 16));
  if (!Number.isFinite(elapsed) || elapsed <= 0) return fallback;
  if (elapsed < MIN_FILL_MS) return { status: "sent" };

  const name = clean(formData, "name", 120);
  const email = clean(formData, "email", 200);
  const need = clean(formData, "need", 60);
  const message = clean(formData, "message", 4000, true);
  const website = clean(formData, "website", 200);

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Please add your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "That email address does not look right.";
  if (!need) fieldErrors.need = "Pick the closest option.";
  if (message.length < 10) fieldErrors.message = "A sentence or two is enough, but I need a little more than that.";
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors };
  }

  if (!(await turnstileOk(clean(formData, "cf-turnstile-response", 4000)))) return fallback;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set, message not delivered");
    return fallback;
  }

  const to = process.env.CONTACT_TO ?? EMAIL;
  const from = process.env.CONTACT_FROM ?? "Website <onboarding@resend.dev>";
  const options = copy.contact.need_options;
  const needLabel = (options.find((o) => o.value === need) ?? options[options.length - 1]).label;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Need: ${needLabel}`,
    website ? `Website / WhatsApp: ${website}` : null,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Website enquiry: ${name} (${needLabel})`,
      text,
    });
    if (error) {
      console.error("contact: Resend rejected the message", error);
      return fallback;
    }
  } catch (err) {
    console.error("contact: sending failed", err);
    return fallback;
  }

  // Optional acknowledgement to the visitor. Only sent when Turnstile is verifying,
  // and the body carries no visitor-supplied text, so this cannot be used to mail
  // a chosen message to a chosen address from the domain.
  if (process.env.CONTACT_AUTOREPLY === "true" && TURNSTILE_ENABLED) {
    try {
      await resend.emails.send({
        from,
        to: email,
        replyTo: to,
        subject: "Thanks, I have your message",
        text: `Hello,\n\nThanks for getting in touch. I have your message and will reply within one working day.\n\nAli Hasan Sheikh\n${to}`,
      });
    } catch (err) {
      // The enquiry itself already arrived; a failed acknowledgement is not the visitor's problem.
      console.error("contact: acknowledgement failed", err);
    }
  }

  return { status: "sent" };
}
