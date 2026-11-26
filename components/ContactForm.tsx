"use client";

import { useActionState, useEffect, useRef, useState, useTransition } from "react";
import Script from "next/script";
import { sendMessage, type ContactState } from "@/app/actions/contact";
import Magnet from "@/components/ui/magnet";
import type { SiteCopy } from "@/data/copy";

type NeedOption = { value: string; label: string };

const initialState: ContactState = { status: "idle" };
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm({
  copy,
  needOptions,
}: {
  copy: SiteCopy["contact"];
  needOptions: NeedOption[];
}) {
  // useActionState drives the no-JavaScript post. With JavaScript the action is called
  // directly below, because a rejected action dispatched through useActionState is
  // rethrown during render and would replace the page with an error screen.
  const [noJsState, formAction] = useActionState(sendMessage, initialState);
  const [result, setResult] = useState<ContactState | null>(null);
  const [pending, startTransition] = useTransition();
  const state = result ?? noJsState;

  // Controlled fields: React resets a form after its action runs, and a failed send
  // must not wipe what the visitor typed.
  const [values, setValues] = useState({ name: "", email: "", need: "", message: "", website: "" });
  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const openedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const sent = state.status === "sent";

  // The page is static, so the clock starts in the browser. performance.now() is
  // monotonic, so a wrong or adjusted system clock cannot look like a bot.
  // A service row can pre-select the dropdown with ?need=<id>.
  useEffect(() => {
    openedAt.current = performance.now();
    const wanted = new URLSearchParams(window.location.search).get("need");
    if (wanted && needOptions.some((o) => o.value === wanted)) setValues((v) => ({ ...v, need: wanted }));
  }, [needOptions]);

  // Service rows elsewhere on the page choose the kind of work without a reload.
  useEffect(() => {
    const onNeed = (e: Event) => {
      const wanted = (e as CustomEvent<string>).detail;
      if (needOptions.some((o) => o.value === wanted)) setValues((v) => ({ ...v, need: wanted }));
    };
    window.addEventListener("contact:need", onNeed);
    return () => window.removeEventListener("contact:need", onNeed);
  }, [needOptions]);

  useEffect(() => {
    if (sent) doneRef.current?.focus();
  }, [sent]);

  // Send the reader straight to the field that needs fixing.
  useEffect(() => {
    if (state.status !== "error") return;
    formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [state]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    if (pending) return;
    const data = new FormData(e.currentTarget);
    data.set("elapsedMs", String(Math.round(performance.now() - openedAt.current)));
    startTransition(async () => {
      try {
        setResult(await sendMessage(state, data));
      } catch {
        setResult({ status: "error", message: copy.error_text });
      }
    });
  };

  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <div>
      {/* Mounted from the first render so screen readers announce the change inside it. */}
      <p role="status" aria-live="polite" className="sr-only">
        {sent ? `${copy.success_title} ${copy.success_text}` : ""}
      </p>

      {sent ? (
        <div ref={doneRef} tabIndex={-1} className="mt-12 border-y border-dark-line py-12 outline-none">
          <p className="text-3xl tracking-[-0.02em] sm:text-4xl">{copy.success_title}</p>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-dark-soft">{copy.success_text}</p>
        </div>
      ) : (
        <form
          ref={formRef}
          action={formAction}
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 sm:mt-14"
        >
          {/* Honeypot: removed from the layout, so no browser autofill can reach it. */}
          <div className="hp" aria-hidden="true">
            <label htmlFor="hp_9c2">Do not fill this in</label>
            <input id="hp_9c2" name="hp_9c2" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-x-14 sm:grid-cols-2">
            <Field id="name" label={copy.name_label} error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                className="input"
                autoComplete="name"
                required
                maxLength={120}
                value={values.name}
                onChange={set("name")}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
            </Field>
            <Field id="email" label={copy.email_label} error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                className="input"
                autoComplete="email"
                required
                maxLength={200}
                value={values.email}
                onChange={set("email")}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </Field>
          </div>

          <Field id="need" label={copy.need_label} error={errors.need}>
            <select
              id="need"
              name="need"
              className="input"
              required
              value={values.need}
              onChange={set("need")}
              aria-invalid={errors.need ? true : undefined}
              aria-describedby={errors.need ? "need-error" : undefined}
            >
              <option value="">{copy.need_placeholder}</option>
              {needOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>

          <Field id="message" label={copy.message_label} error={errors.message}>
            <textarea
              id="message"
              name="message"
              className="input min-h-28"
              rows={5}
              required
              maxLength={4000}
              placeholder={copy.message_placeholder}
              value={values.message}
              onChange={set("message")}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
          </Field>

          <Field id="website" label={copy.website_label}>
            <input
              id="website"
              name="website"
              type="text"
              className="input"
              maxLength={200}
              autoComplete="url"
              value={values.website}
              onChange={set("website")}
            />
          </Field>

          {TURNSTILE_SITE_KEY && (
            <>
              <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
              <div className="cf-turnstile mt-6" data-sitekey={TURNSTILE_SITE_KEY} data-size="flexible" data-theme="dark" />
            </>
          )}

          <div className="relative mt-16 border-t border-dark-line sm:mt-24">
            <div className="flex justify-end pr-2 sm:pr-24 -translate-y-1/2">
              <Magnet padding={60} magnetStrength={3}>
                {/* aria-disabled rather than disabled: a disabled button loses keyboard focus. */}
                <button
                  type="submit"
                  aria-disabled={pending}
                  className="grid size-36 place-items-center rounded-full bg-blue px-6 text-center text-base font-medium leading-tight text-white transition-colors hover:bg-blue-hover aria-disabled:opacity-70 sm:size-44 sm:text-lg"
                >
                  {pending ? copy.sending : copy.button}
                </button>
              </Magnet>
            </div>
            <p aria-live="polite" className="-mt-10 max-w-xl text-[15px] leading-relaxed text-[var(--error-dark)] sm:-mt-16">
              {state.status === "error" ? state.message : ""}
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}
