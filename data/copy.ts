// All surface copy for the site lives here so wording can change without touching components.
// Rules: British spelling, plain English, no invented facts, prices mirror the Upwork listings.

export type ServiceId =
  | "wordpress"
  | "laravel"
  | "crm"
  | "automation"
  | "chatbot"
  | "website";

export type SiteCopy = {
  meta: { title: string; description: string; og_headline: string };
  rail: {
    role_label: string;
    availability_line: string;
    hours_line: string;
    location_line: string;
  };
  nav: { label: string; path: string; href: string }[];
  hero: {
    h1: string;
    sub: string;
    primary_cta: string;
    secondary_cta: string;
    facts: { value: string; label: string }[];
  };
  services: {
    heading: string;
    intro: string;
    items: {
      id: ServiceId;
      title: string;
      what_i_do: string;
      from_price: string;
      cta_label: string;
    }[];
  };
  work: {
    heading: string;
    intro: string;
    cases: {
      slug: string;
      plain_name: string;
      problem: string;
      what_it_does_now: string;
      outcomes: string[];
      ask_me_for: string;
      details_label: string;
    }[];
  };
  how_it_works: { heading: string; steps: { title: string; text: string }[] };
  about: {
    heading: string;
    lead: string;
    how_i_work: string;
    story: string;
    education_line: string;
    fulltime_line: string;
    cv_label: string;
    photo_alt: string;
  };
  engineers: {
    heading: string;
    intro: string;
    diagram_caption: string;
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
  faq: { heading: string; items: { q: string; a: string }[] };
  contact: {
    heading: string;
    intro: string;
    name_label: string;
    email_label: string;
    need_label: string;
    need_options: string[]; // same order as services.items, plus one "something else" entry last
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
  };
  footer: { colophon: string };
};

export const copy: SiteCopy = {
  "meta": {
    "title": "Ali Hasan Sheikh · Developer for UK small businesses",
    "description": "Website and email fixes, custom CRMs, automations and chatbots for UK small businesses. Fixed prices from $49. A reply within one working day.",
    "og_headline": "I fix websites and build the systems UK businesses run on."
  },
  "rail": {
    "role_label": "Software developer for UK small businesses",
    "availability_line": "Taking new projects",
    "hours_line": "Online for the UK working day",
    "location_line": "Karachi, Pakistan · remote"
  },
  "nav": [
    {
      "label": "What I do",
      "path": "/services",
      "href": "#services"
    },
    {
      "label": "Work",
      "path": "/work",
      "href": "#work"
    },
    {
      "label": "How it works",
      "path": "/process",
      "href": "#process"
    },
    {
      "label": "About",
      "path": "/about",
      "href": "#about"
    },
    {
      "label": "Contact",
      "path": "/contact",
      "href": "#contact"
    }
  ],
  "hero": {
    "h1": "I fix websites and build the systems UK businesses run on.",
    "sub": "Website and email fixes, custom CRMs and client portals, automations and chatbots. Fixed prices agreed before I start. Two UK businesses run on systems I built on my own.",
    "primary_cta": "Tell me about your project",
    "secondary_cta": "See what I've built",
    "facts": [
      {
        "value": "2",
        "label": "UK businesses running on systems I built alone"
      },
      {
        "value": "From $49",
        "label": "fixed price, agreed before I start"
      },
      {
        "value": "1 working day",
        "label": "at most, before you hear from me"
      },
      {
        "value": "UK hours",
        "label": "your whole working day, from Karachi"
      }
    ]
  },
  "services": {
    "heading": "What I can help with",
    "intro": "Written as the problems people bring me. The prices are starting points; you get a fixed quote before anything begins. If yours is not here, ask anyway.",
    "items": [
      {
        "id": "wordpress",
        "title": "Your WordPress site has broken, or its emails are going missing",
        "what_i_do": "Usually it is a plugin, a theme or the form itself. I track the fault down, fix it, and check that enquiries reach your inbox.",
        "from_price": "From $49",
        "cta_label": "Get a price"
      },
      {
        "id": "laravel",
        "title": "Your Laravel app needs a fix, a new feature or a link to another service",
        "what_i_do": "I read the code as it is, fix the fault or add the feature, and test it before it goes live.",
        "from_price": "From $89",
        "cta_label": "Get a price"
      },
      {
        "id": "crm",
        "title": "Leads, jobs and invoices live in spreadsheets, and things slip through",
        "what_i_do": "I build a CRM, client portal or custom system shaped around how your business already works. Quotes, jobs, invoices and client logins in one place.",
        "from_price": "From $199",
        "cta_label": "Get a price"
      },
      {
        "id": "automation",
        "title": "Someone on your team does the same admin by hand every day",
        "what_i_do": "I make it automatic with n8n or Make: forms into your CRM, WhatsApp updates to customers, or an AI agent for routine tasks.",
        "from_price": "From $99",
        "cta_label": "Get a price"
      },
      {
        "id": "chatbot",
        "title": "You want your website or WhatsApp to answer customers when you cannot",
        "what_i_do": "I build a chatbot that answers from your own information, collects the visitor's details, and passes the lead to you.",
        "from_price": "From $99",
        "cta_label": "Get a price"
      },
      {
        "id": "website",
        "title": "You need a new website you can update yourself",
        "what_i_do": "I build it in WordPress, add a shop if you sell online, and hand over every login at the end.",
        "from_price": "From $89",
        "cta_label": "Get a price"
      }
    ]
  },
  "work": {
    "heading": "Things I have built",
    "intro": "Two systems UK companies use every day, and my final-year university project.",
    "cases": [
      {
        "slug": "track-your-move",
        "plain_name": "One system for a removals company, from first quote to paid invoice",
        "problem": "Quotes, jobs, invoices, payments and storage lived in spreadsheets and tools that did not talk to each other.",
        "what_it_does_now": "Staff handle every job in one place, and customers open their quote from a link without logging in. I built it and still maintain it.",
        "outcomes": [
          "Every job and invoice gets its own number, and documents go out as PDF or spreadsheet",
          "Customers open their quote from a link, with no login and no account",
          "Every change to a quote is recorded",
          "Four levels of staff access, and nobody can give themselves more than they hold"
        ],
        "ask_me_for": "Ask me for this if you quote, run and invoice jobs and want it all in one place.",
        "details_label": "Engineering detail"
      },
      {
        "slug": "resolute-estate-solutions",
        "plain_name": "An 18-stage lead pipeline for a UK property-buying business",
        "problem": "Every lead had to pass through a long, rule-bound pipeline without skipping a stage, and offer documents were typed by hand.",
        "what_it_does_now": "Leads arrive from other websites and tools, then move through 18 set stages on a board. The system refuses any jump that breaks the rules, and offer documents come out as PDFs.",
        "outcomes": [
          "A lead cannot skip a stage, and a summary view shows where every lead sits",
          "Offer documents are generated as PDFs instead of typed by hand",
          "Each company sees only its own leads, with access set by role",
          "Automated tests walk the key pipeline journeys from start to finish"
        ],
        "ask_me_for": "Ask me for this if your sales process has rules and you need every deal to follow them.",
        "details_label": "Engineering detail"
      },
      {
        "slug": "builderconnect",
        "plain_name": "A marketplace for building work, from posting a job to signing the contract",
        "problem": "My final-year university project, so there is no client behind it. I set out to build one place to post building work, take bids and sign a contract.",
        "what_it_does_now": "Clients publish a project, builders bid, and the client shortlists and awards it. A contract is generated as a PDF and both sides sign it.",
        "outcomes": [
          "Live chat between client and builder, with typing indicators",
          "Builder plans paid through Stripe Checkout, in test mode",
          "A public AI assistant that answers only from the platform's own FAQ",
          "Six user roles, and AI-generated floor plans"
        ],
        "ask_me_for": "Ask me for this if you need online payments, live chat or a chatbot inside a web app.",
        "details_label": "Engineering detail"
      }
    ]
  },
  "how_it_works": {
    "heading": "How it works",
    "steps": [
      {
        "title": "Tell me what is wrong, or what you want built",
        "text": "A few lines by form, email or WhatsApp is plenty. You do not need to know the technical words for it."
      },
      {
        "title": "I reply within one working day",
        "text": "Small fixes get a fixed price in that first reply. Bigger builds get a short call first, then a price. Nothing starts until you agree it."
      },
      {
        "title": "I build it, and you hear from me as it goes",
        "text": "You get regular progress updates during UK working hours, so you always know where things stand."
      },
      {
        "title": "You get the keys",
        "text": "The code, the hosting and every account are in your name. If something breaks in the first 14 days, I fix it."
      }
    ]
  },
  "about": {
    "heading": "About",
    "lead": "I'm Ali. I write software from Karachi, on UK time.",
    "how_i_work": "I agree a fixed price before I start and hand over all the code and logins at the end. You deal with me, not an account manager.",
    "story": "Since December 2025 I have been the sole engineer at Touchperia Digital. I built two production systems there for UK clients, on my own. That meant gathering requirements, modelling the data, writing the code, testing it and deploying it to a Linux VPS.",
    "education_line": "BS Software Engineering · Sir Syed University of Engineering and Technology, Karachi · Class of 2026 · CGPA 3.86/4.00",
    "fulltime_line": "Also open to full-time roles.",
    "cv_label": "CV (PDF)",
    "photo_alt": "Ali Hasan Sheikh, software developer, Karachi"
  },
  "engineers": {
    "heading": "The invisible half of software, built properly.",
    "intro": "For the technical reader. This is the part clients never see and always depend on: auth, permissions, data integrity, tests, deploys.",
    "diagram_caption": "The path a request takes through one of my systems, from browser to database and back.",
    "diagram_labels": {
      "client": "Your customer",
      "client_sub": "browser or phone",
      "server": "Web server",
      "server_sub": "nginx · linux vps",
      "app": "The application",
      "app_sub": "laravel · spring boot",
      "db": "Your records",
      "db_sub": "mysql",
      "cache": "Cache",
      "cache_sub": "redis",
      "note": "The reply comes back 200 OK. The customer sees only the page."
    },
    "stack_sentence": "Most days I work in Laravel and PHP, with Vue or React on the front end. BuilderConnect runs on Java and Spring Boot, and automations run on n8n or Make.",
    "stack_details_label": "Full stack list",
    "github_label": "Read the code on GitHub"
  },
  "faq": {
    "heading": "Questions people ask",
    "items": [
      {
        "q": "Where are you, and when are you around?",
        "a": "Karachi, Pakistan, and I work UK hours. I am online for the whole UK working day, so replies come while you are at your desk."
      },
      {
        "q": "How does pricing work?",
        "a": "Every job has a fixed price agreed before I start. For a small fix, the price is in my first reply. For a bigger build, we have a short call first, then I send a quote."
      },
      {
        "q": "Who owns the code and the accounts?",
        "a": "You do. At handover the code and every account are in your name. If you want someone else to take over later, they can."
      },
      {
        "q": "Where will it be hosted?",
        "a": "On your existing hosting if it can handle it, or on a server set up in your name. Either way, it is yours."
      },
      {
        "q": "What happens after launch?",
        "a": "Anything that breaks in the first 14 days after handover, I fix. After that, ask me for support or changes and I will quote them."
      },
      {
        "q": "Can we go through Upwork instead?",
        "a": "Yes. Some people prefer Upwork's payment protection, and that is fine by me. Say so in your message and I will set it up there."
      }
    ]
  },
  "contact": {
    "heading": "Tell me about your project",
    "intro": "A few lines about what is wrong, or what you want, is enough. I reply within one working day.",
    "name_label": "Your name",
    "email_label": "Email",
    "need_label": "What do you need?",
    "need_options": [
      "WordPress site broken, or emails not arriving",
      "Laravel fix, feature or integration",
      "CRM, client portal or custom web app",
      "Automation with n8n or Make",
      "Chatbot for a website or WhatsApp",
      "A new WordPress website",
      "Something else, or not sure yet"
    ],
    "message_label": "What is going on?",
    "message_placeholder": "For example: quotes go out from a spreadsheet and two people keep editing the wrong version.",
    "website_label": "Your website or WhatsApp number (optional)",
    "button": "Send message",
    "sending": "Sending…",
    "success_title": "Thanks, it has arrived.",
    "success_text": "I will reply from ali@alihasansheikh.com within one working day. If it cannot wait, message me on WhatsApp.",
    "error_text": "That did not send. Your message is still in the form. Email ali@alihasansheikh.com or message me on WhatsApp instead.",
    "privacy_note": "I use what you enter only to reply to you. The message reaches my inbox through Resend, an email service. I delete it whenever you ask.",
    "alt_contact_line": "Rather email or WhatsApp?"
  },
  "footer": {
    "colophon": "Hand-built in Next.js and TypeScript, set in Archivo and IBM Plex Mono, deployed on Vercel. This site is a work sample too."
  }
};
