// All surface copy for the site lives here so wording can change without touching components.
// Rules: British spelling, plain English, sentences under 25 words, no em-dashes, no invented facts.
// Approved by the owner in "alihasansheikh.com new site copy" (26 Nov 2026). Client names are
// deliberately left out of every surface string.

export type ServiceId = "systems" | "automation" | "websites" | "care";
export type NeedValue = ServiceId | "agency" | "other";

export type SiteCopy = {
  meta: { title: string; description: string; og_headline: string; og_sub: string };
  intro: { greetings: string[] };
  header: { mark: string; menu_label: string; close_label: string; nav_heading: string };
  nav: { label: string; href: string }[];
  hero: {
    location_line_1: string;
    location_line_2: string;
    h1: string;
    sub: string;
    cta: string;
    note: string;
    marquee: string;
  };
  statement: {
    text: string;
    side: string;
    button: string;
    facts: { value: string; label: string }[];
  };
  services: {
    heading: [string, string];
    intro: string;
    items: { id: ServiceId; title: string; text: string }[];
    row_cta: string;
  };
  work: {
    heading: [string, string];
    intro: string;
    cases: {
      slug: string;
      label: string;
      plain_name: string;
      status: string;
      problem: string;
      what_it_does_now: string;
      outcomes: string[];
      ask_me_for: string;
      details_label: string;
      need: NeedValue;
      seo_title: string;
      seo_description: string;
    }[];
    read_more: string;
    page: { back: string; built_label: string; other_work: string; cta_heading: string; cta_button: string };
    labels: { problem: string; now: string; changed: string };
  };
  how_it_works: { heading: [string, string]; steps: { title: string; text: string; when: string }[] };
  working_with_me: { heading: [string, string]; intro: string; points: { lead: string; text: string }[] };
  agencies: { heading: [string, string]; text: string; link: string };
  about: {
    heading: [string, string];
    lead: string;
    story: string;
    how_i_work: string;
    education_line: string;
    cv_label: string;
    photo_alt: string;
  };
  engineers: {
    heading: [string, string];
    intro: string;
    diagram_caption: string;
    diagram_pause: string;
    diagram_labels: {
      client: string;
      client_sub: string;
      server: string;
      server_sub: string;
      app: string;
      app_sub: string;
      db: string;
      db_sub: string;
      cache: string;
      cache_sub: string;
      note: string;
    };
    stack_sentence: string;
    stack_details_label: string;
    github_label: string;
  };
  faq: { heading: [string, string]; items: { q: string; a: string }[] };
  contact: {
    heading: [string, string];
    intro: string;
    name_label: string;
    email_label: string;
    need_label: string;
    need_placeholder: string;
    need_options: { value: NeedValue; label: string }[];
    message_label: string;
    message_placeholder: string;
    website_label: string;
    button: string;
    sending: string;
    success_title: string;
    success_text: string;
    error_text: string;
    privacy_note: string;
    alt_contact_line: string;
    whatsapp_label: string;
  };
  footer: {
    year_label: string;
    uk_time_label: string;
    karachi_time_label: string;
    elsewhere_label: string;
    colophon: string;
  };
};

export const copy: SiteCopy = {
  meta: {
    title: "Custom CRM and website developer for UK small businesses · Ali Hasan Sheikh",
    description:
      "Custom CRMs, client portals, automations and websites for UK small businesses, built by one developer on UK hours. Fixed price before work starts.",
    og_headline: "I build the systems small businesses run on.",
    og_sub: "Custom CRMs, client portals, automations and websites · UK hours",
  },
  intro: {
    greetings: ["Hello", "Hiya", "Alright?", "Salaam", "Hello, I'm Ali"],
  },
  header: {
    mark: "© Built by Ali",
    menu_label: "Open menu",
    close_label: "Close menu",
    nav_heading: "Navigation",
  },
  nav: [
    { label: "What I do", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "How it works", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    location_line_1: "Karachi, Pakistan",
    location_line_2: "Working UK hours",
    h1: "I build the systems small businesses run on.",
    sub: "Custom CRMs, client portals, automations and websites. Two UK companies run their daily work on systems I built and still look after.",
    cta: "Tell me about your project",
    note: "Fixed price before I start · Reply within one working day",
    marquee: "Ali Hasan Sheikh",
  },
  statement: {
    text: "Many small businesses run on spreadsheets, inboxes and memory. I replace that with one system built around how you already work, so jobs, leads and invoices stop slipping through.",
    side: "You deal with me from first message to handover. No account manager, no hand-offs.",
    button: "Tell me about your project",
    facts: [
      { value: "2", label: "UK companies running daily on systems I built alone" },
      { value: "1 working day", label: "at most, before you hear back from me" },
      { value: "9:00–17:30", label: "UK time, Monday to Friday, from Karachi" },
      { value: "14 days", label: "of free fixes after handover" },
    ],
  },
  services: {
    heading: ["What I can", "help with"],
    intro: "Four kinds of work, all priced as a fixed quote before anything begins. If yours is not here, ask anyway.",
    items: [
      {
        id: "systems",
        title: "CRMs, client portals and job systems",
        text: "Leads, quotes, jobs and invoices in one place, shaped around how your business already works. Your staff log in to one system; your customers get their own view.",
      },
      {
        id: "automation",
        title: "Automation and AI assistants",
        text: "The admin someone does by hand every day, done automatically. Forms into your CRM, updates to customers on WhatsApp, or an assistant that answers from your own information.",
      },
      {
        id: "websites",
        title: "Business websites",
        text: "A fast, clear website that explains what you do and brings in enquiries. You can update it yourself, and every login is yours.",
      },
      {
        id: "care",
        title: "Fixes, features and ongoing care",
        text: "Your Laravel or PHP app has a fault, needs a feature or has no one looking after it. I read the code as it is, fix it, and can look after it month to month.",
      },
    ],
    row_cta: "More about this",
  },
  work: {
    heading: ["Things I", "have built"],
    intro: "Two systems UK companies use every day, and my final-year university project. Client names are left out for privacy.",
    labels: { problem: "The problem", now: "What it does now", changed: "What changed" },
    read_more: "Read the full case study",
    page: {
      back: "All work",
      built_label: "How it is built",
      other_work: "More work",
      cta_heading: "Need something like this?",
      cta_button: "Tell me about your project",
    },
    cases: [
      {
        slug: "removals-system",
        label: "Removals company, UK",
        plain_name: "One system for a removals company, from first quote to paid invoice",
        status: "In daily use",
        problem:
          "Quotes, jobs, invoices, payments and storage lived in spreadsheets and tools that did not talk to each other.",
        what_it_does_now:
          "Staff handle every job in one place, and customers open their quote from a link without logging in. I built it and still look after it.",
        outcomes: [
          "Every job and invoice gets its own number, and documents go out as PDF or spreadsheet",
          "Customers open their quote from a private link, with no account",
          "Every change to a quote is recorded",
          "Four levels of staff access, and nobody can give themselves more than they hold",
        ],
        ask_me_for: "Ask me for this if you quote, run and invoice jobs and want it all in one place.",
        details_label: "Engineering detail",
        need: "systems",
        seo_title: "Removals CRM: quotes, jobs and invoices in one system",
        seo_description:
          "Case study: one Laravel system for a UK removals company, from first quote to paid invoice. Staff run every job in one place; customers open quotes from a link.",
      },
      {
        slug: "property-pipeline",
        label: "Property-buying business, UK",
        plain_name: "An 18-stage lead pipeline for a property-buying business",
        status: "In daily use",
        problem:
          "Every lead had to pass through a long, rule-bound pipeline without skipping a stage, and offer documents were typed by hand.",
        what_it_does_now:
          "Leads arrive from other websites and tools, then move through 18 set stages on a board. The system refuses any jump that breaks the rules, and offer documents come out as PDFs.",
        outcomes: [
          "A lead cannot skip a stage, and a summary view shows where every lead sits",
          "Offer documents are generated, not typed",
          "Each company sees only its own leads, with access set by role",
          "Automated tests walk the key pipeline journeys from start to finish",
        ],
        ask_me_for: "Ask me for this if your sales process has rules and every deal must follow them.",
        details_label: "Engineering detail",
        need: "systems",
        seo_title: "18-stage property lead pipeline CRM in Laravel",
        seo_description:
          "Case study: an 18-stage lead pipeline for a UK property-buying business. Leads cannot skip stages, offer PDFs are generated, and each company sees only its own leads.",
      },
      {
        slug: "builderconnect",
        label: "BuilderConnect",
        plain_name: "A marketplace for building work, from posting a job to signing the contract",
        status: "University project · graded 100/100",
        problem:
          "My final-year university project, so there is no client behind it. I set out to build one place to post building work, take bids and sign a contract.",
        what_it_does_now:
          "Clients publish a project, builders bid, and the client shortlists and awards it. A contract is generated as a PDF and both sides sign it.",
        outcomes: [
          "Live chat between client and builder",
          "Builder plans paid through Stripe Checkout, in test mode",
          "An AI assistant that answers only from the platform's own FAQ",
          "Six user roles, and AI-generated floor plans",
        ],
        ask_me_for: "Ask me for this if you need online payments, live chat or a chatbot inside a web app.",
        details_label: "Engineering detail",
        need: "other",
        seo_title: "BuilderConnect: construction marketplace in Spring Boot",
        seo_description:
          "My final-year project, graded 100/100: clients post building work, builders bid, and both sides sign a generated contract. Spring Boot, React and Stripe.",
      },
    ],
  },
  how_it_works: {
    heading: ["How it", "works"],
    steps: [
      {
        title: "Tell me what is wrong, or what you want built",
        text: "A few lines by form, email or WhatsApp is plenty. You do not need the technical words for it.",
        when: "Form, email or WhatsApp",
      },
      {
        title: "I reply within one working day",
        text: "Small jobs get a fixed price in that first reply. Bigger builds get a short call first, then a written scope and price. Nothing starts until you agree it.",
        when: "Within 1 working day",
      },
      {
        title: "I build it, and you hear from me as it goes",
        text: "Regular progress updates during UK working hours, so you always know where things stand.",
        when: "UK working hours",
      },
      {
        title: "You get the keys",
        text: "The code, the hosting and every account are in your name. If something breaks in the first 14 days, I fix it free.",
        when: "14 days of free fixes",
      },
    ],
  },
  working_with_me: {
    heading: ["Working with me", "from Karachi"],
    intro: "I am in Pakistan, and I work your hours. Here is what that means in practice.",
    points: [
      { lead: "Your hours, not mine.", text: "Monday to Friday, 9:00 to 17:30 UK time. Replies come while you are at your desk." },
      { lead: "One person, start to finish.", text: "The person you message is the person writing your code." },
      { lead: "A written scope and a fixed price.", text: "You know what you are getting and what it costs before I start." },
      { lead: "You own everything.", text: "Code, hosting and accounts are in your name from handover. Anyone can take over later." },
      { lead: "NDA on request.", text: "Happy to sign yours, or send mine." },
      { lead: "Outside the UK?", text: "Most of my clients are UK businesses, and I work with businesses anywhere in English." },
    ],
  },
  agencies: {
    heading: ["For", "agencies"],
    text: "Got more work than developers? I build and maintain Laravel and PHP projects under your brand, in your repository, on UK hours. Your client deals with you; I stay behind the scenes, under NDA.",
    link: "More about white-label work",
  },
  about: {
    heading: ["About", "me"],
    lead: "I'm Ali. I build software from Karachi, on UK time.",
    story:
      "Since December 2025 I have been the only engineer on two production systems for UK companies. I gathered the requirements, designed the data, wrote the code, tested it and put it live on Linux servers. I still look after both.",
    how_i_work:
      "I agree a fixed price before I start and hand over all the code and logins at the end. You deal with me, not an account manager.",
    education_line:
      "BS Software Engineering · Sir Syed University of Engineering and Technology, Karachi · Class of 2026 · CGPA 3.84/4.00",
    cv_label: "Download my CV (PDF)",
    photo_alt: "Ali Hasan Sheikh, software developer, Karachi",
  },
  engineers: {
    heading: ["The invisible half", "of software, built properly"],
    intro:
      "For the technical reader. This is the part clients never see and always depend on: auth, permissions, data integrity, tests, deploys.",
    diagram_caption: "The path a request takes through one of my systems, from browser to database and back.",
    diagram_pause: "Pause the animation",
    diagram_labels: {
      client: "Your customer",
      client_sub: "browser or phone",
      server: "Web server",
      server_sub: "nginx · linux vps",
      app: "The application",
      app_sub: "laravel · spring boot",
      db: "Your records",
      db_sub: "mysql",
      cache: "Cache",
      cache_sub: "redis",
      note: "The reply comes back 200 OK. The customer sees only the page.",
    },
    stack_sentence:
      "Most days I work in Laravel and PHP, with Vue or React on the front end. BuilderConnect runs on Java and Spring Boot, and automations run on n8n or Make.",
    stack_details_label: "Full stack list",
    github_label: "Read the code on GitHub",
  },
  faq: {
    heading: ["Questions", "people ask"],
    items: [
      {
        q: "How much will it cost?",
        a: "Every job gets a fixed price before I start. Small jobs are priced in my first reply. Bigger builds get a short call, then a written scope and price.",
      },
      {
        q: "Where are you, and when are you around?",
        a: "Karachi, Pakistan. I work Monday to Friday, 9:00 to 17:30 UK time, so replies come while you are at your desk.",
      },
      {
        q: "Do you work with businesses outside the UK?",
        a: "Yes. Most of my clients are UK businesses, and I work with businesses anywhere in English.",
      },
      {
        q: "Who owns the code and the accounts?",
        a: "You do. At handover the code and every account are in your name. If you want someone else to take over later, they can.",
      },
      {
        q: "Will you sign an NDA?",
        a: "Yes. I can sign yours, or send mine before we discuss details.",
      },
      {
        q: "Where will it be hosted?",
        a: "On your existing hosting if it can handle it, or on a server set up in your name. Either way, it is yours.",
      },
      {
        q: "What happens after launch?",
        a: "Anything that breaks in the first 14 days after handover, I fix free. After that, I can look after it month to month, or quote changes as you need them.",
      },
      {
        q: "Can we go through Upwork instead?",
        a: "Yes. Some people prefer Upwork's payment protection, and that is fine by me. Say so in your message.",
      },
    ],
  },
  contact: {
    heading: ["Tell me about", "your project"],
    intro: "A few lines about what is wrong, or what you want, is enough. I reply within one working day.",
    name_label: "Your name",
    email_label: "Email",
    need_label: "What do you need?",
    need_placeholder: "Choose one",
    need_options: [
      { value: "systems", label: "A CRM, client portal or job system" },
      { value: "automation", label: "Automation or an AI assistant" },
      { value: "websites", label: "A business website" },
      { value: "care", label: "A fix, a feature or ongoing care for an existing app" },
      { value: "agency", label: "White-label work for my agency" },
      { value: "other", label: "Something else, or not sure yet" },
    ],
    message_label: "What is going on?",
    message_placeholder: "For example: quotes go out from a spreadsheet and two people keep editing the wrong version.",
    website_label: "Your website or WhatsApp number (optional)",
    button: "Send message",
    sending: "Sending…",
    success_title: "Thanks, it has arrived.",
    success_text:
      "I will reply from alihasansheikh01@gmail.com within one working day. If it cannot wait, message me on WhatsApp.",
    error_text:
      "That did not send, but your message is still in the form. Email alihasansheikh01@gmail.com or message me on WhatsApp instead.",
    privacy_note:
      "I use what you enter only to reply to you. It reaches my inbox through Resend, an email service. I delete it whenever you ask.",
    alt_contact_line: "Rather email or WhatsApp?",
    whatsapp_label: "WhatsApp me",
  },
  footer: {
    year_label: "Version",
    uk_time_label: "UK time",
    karachi_time_label: "Karachi",
    elsewhere_label: "Elsewhere",
    colophon: "Hand-built in Next.js and TypeScript, deployed on Vercel. This site is a work sample too.",
  },
};
