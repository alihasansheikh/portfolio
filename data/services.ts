// Copy for the service pages. Same rules as copy.ts: British spelling, plain English,
// sentences under 25 words, no em-dashes, no invented facts. Every claim here either
// restates the approved home-page copy or describes what is offered, not past results.
// Drafted 26 Nov 2026 for the owner's review.

import type { NeedValue, ServiceId } from "@/data/copy";

export type ServicePage = {
  slug: string;
  need: NeedValue;
  service?: ServiceId;
  nav_label: string;
  seo_title: string;
  seo_description: string;
  h1: string;
  intro: string;
  signs_heading: string;
  signs: string[];
  includes_heading: string;
  includes: { lead: string; text: string }[];
  built_with: string;
  work: string[];
  work_note?: string;
  faq: { q: string; a: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "custom-crm-development",
    need: "systems",
    service: "systems",
    nav_label: "CRMs, client portals and job systems",
    seo_title: "Custom CRM development for UK small businesses",
    seo_description:
      "A custom CRM, client portal or job system built around how your business works. Fixed price before work starts, UK hours, and you own the code.",
    h1: "Custom CRMs, client portals and job systems",
    intro:
      "Off-the-shelf CRMs make you work their way. I build one system around the way your business already runs, so leads, quotes, jobs and invoices live in one place.",
    signs_heading: "Sound familiar?",
    signs: [
      "Quotes go out from a spreadsheet, and people edit the wrong version.",
      "Leads arrive by email, phone and web form, and some are never followed up.",
      "You pay for several tools that do not talk to each other.",
      "Only one person knows where everything is.",
    ],
    includes_heading: "What you get",
    includes: [
      {
        lead: "Leads to invoices in one place.",
        text: "Enquiries, quotes, jobs, invoices and payments, connected, with numbering and PDFs done for you.",
      },
      {
        lead: "A view for your customers.",
        text: "Customers open their quote or job from a private link, or log in to their own portal.",
      },
      {
        lead: "Rules the system enforces.",
        text: "Stages that cannot be skipped and changes that are recorded, so nothing depends on memory.",
      },
      {
        lead: "Staff access by role.",
        text: "Each person sees and changes only what their role allows.",
      },
      {
        lead: "Connected to what you use.",
        text: "Leads can arrive from your website and other tools without anyone retyping them.",
      },
      {
        lead: "Yours to keep.",
        text: "The code, hosting and accounts are in your name from handover.",
      },
    ],
    built_with:
      "Usually Laravel and PHP with MySQL, and Vue or React for the screens, on a server in your name.",
    work: ["removals-system", "property-pipeline"],
    faq: [
      {
        q: "Why not just use an off-the-shelf CRM?",
        a: "If one fits, use it. A custom system makes sense when you are bending a tool around your process, or paying for several that do not connect.",
      },
      {
        q: "How long does a build take?",
        a: "It depends on the size. Bigger builds start with a short call, then a written scope with the timeline and a fixed price.",
      },
      {
        q: "Can you bring in our existing spreadsheets?",
        a: "Tell me what you have. Moving your existing records across is agreed in the written scope, before anything starts.",
      },
      {
        q: "What happens after it goes live?",
        a: "Anything that breaks in the first 14 days after handover, I fix free. After that, I can look after it month to month.",
      },
    ],
  },
  {
    slug: "business-automation",
    need: "automation",
    service: "automation",
    nav_label: "Automation and AI assistants",
    seo_title: "Business automation and AI assistants",
    seo_description:
      "The admin someone does by hand every day, done automatically. n8n and Make workflows, customer updates and AI assistants that answer from your own information.",
    h1: "Automation and AI assistants",
    intro:
      "If someone copies details from one place to another every day, that job can usually run on its own. I set it up, test it with real cases and hand it over.",
    signs_heading: "Sound familiar?",
    signs: [
      "Someone retypes web enquiries into a spreadsheet or CRM.",
      "Customers chase you for updates you could send automatically.",
      "The same questions arrive every day, and someone answers each one by hand.",
      "The weekly numbers are put together by hand.",
    ],
    includes_heading: "What I can set up",
    includes: [
      {
        lead: "Forms into your CRM.",
        text: "Website enquiries land in the right place with the details filled in, and the right person is told.",
      },
      {
        lead: "Customer updates.",
        text: "Confirmations and progress updates go out by email or WhatsApp when something changes.",
      },
      {
        lead: "An assistant on your own information.",
        text: "A chatbot that answers only from your FAQ and documents, and points people to a person when it cannot.",
      },
      {
        lead: "Reports that build themselves.",
        text: "The weekly numbers gathered and sent to you, without anyone putting them together.",
      },
      {
        lead: "Workflows you can see.",
        text: "They run in n8n or Make accounts in your name, so you can see and change them.",
      },
    ],
    built_with:
      "n8n or Make for the workflows, connected to the tools you already use. AI assistants are limited to your own information.",
    work: ["builderconnect"],
    work_note: "BuilderConnect includes an AI assistant that answers only from the platform's own FAQ.",
    faq: [
      {
        q: "Which tools can you connect?",
        a: "Most tools that offer an API or webhooks, which covers most modern software. Tell me what you use, and I will check before quoting.",
      },
      {
        q: "Will an AI assistant make things up?",
        a: "It is set up to answer only from your own information, and to say when it does not know. You test it before it goes live.",
      },
      {
        q: "Who pays the running costs?",
        a: "You pay n8n, Make or the AI provider directly, on accounts in your name. The quote explains what those costs are.",
      },
    ],
  },
  {
    slug: "business-websites",
    need: "websites",
    service: "websites",
    nav_label: "Business websites",
    seo_title: "Business websites for UK small businesses",
    seo_description:
      "A fast, clear website that explains what you do and brings in enquiries. You can update it yourself, every login is yours, and the price is fixed before work starts.",
    h1: "Business websites that bring in enquiries",
    intro:
      "Your website should tell a visitor what you do, show that you do it well and make it easy to get in touch. I build sites that do those three things, and load fast.",
    signs_heading: "Sound familiar?",
    signs: [
      "Your site looks dated, or breaks on phones.",
      "Visitors cannot tell what you do from the first screen.",
      "Enquiries from the website are rare, or go missing.",
      "You cannot change a price or a photo without calling someone.",
    ],
    includes_heading: "What you get",
    includes: [
      {
        lead: "Clear pages.",
        text: "What you do, who it is for, proof and how to get in touch, in plain English.",
      },
      {
        lead: "Built for phones first.",
        text: "Many visitors arrive on a phone, so every page is built for small screens and loads fast.",
      },
      {
        lead: "An enquiry form that works.",
        text: "Messages reach your inbox, and the form is protected from spam.",
      },
      {
        lead: "Search basics done.",
        text: "Titles, descriptions, a sitemap and structured data, so search engines understand each page.",
      },
      {
        lead: "Edit it yourself.",
        text: "Change text, prices and photos without waiting for a developer.",
      },
      {
        lead: "Every login is yours.",
        text: "Domain, hosting and site accounts are in your name.",
      },
    ],
    built_with:
      "The tool depends on what you need: a site you edit through a simple admin, or a hand-built site like this one.",
    work: [],
    work_note: "This website is a work sample too: hand-built in Next.js and TypeScript.",
    faq: [
      {
        q: "Can you rebuild my existing site?",
        a: "Yes. I can keep your domain and content and rebuild around them, or start fresh.",
      },
      {
        q: "Will it show up on Google?",
        a: "Every page is built so search engines can read it. Ranking also takes time and links from other sites, and nobody can promise a position.",
      },
      {
        q: "Who writes the words?",
        a: "You know your business best. I start from your notes and shape them into clear pages for you to approve.",
      },
    ],
  },
  {
    slug: "laravel-php-support",
    need: "care",
    service: "care",
    nav_label: "Fixes, features and ongoing care",
    seo_title: "Laravel and PHP support, fixes and maintenance",
    seo_description:
      "Your Laravel or PHP app has a fault, needs a feature or has no one looking after it. I read the code as it is, fix it, and can look after it month to month.",
    h1: "Fixes, features and ongoing care for Laravel and PHP apps",
    intro:
      "The developer who built your app has moved on, and now something is broken or needs to change. I read the code as it is, fix what is wrong and explain what I found.",
    signs_heading: "Sound familiar?",
    signs: [
      "Something broke, and the original developer is not around.",
      "You need a new feature, but nobody knows the code.",
      "The app runs on old versions, and nobody updates it.",
      "You hear about errors from customers before anyone else.",
    ],
    includes_heading: "What you get",
    includes: [
      {
        lead: "A clear diagnosis first.",
        text: "What is wrong, what caused it and what it costs to fix, before I change anything.",
      },
      {
        lead: "Fixes and new features.",
        text: "Built to fit the code you already have, not a rewrite you did not ask for.",
      },
      {
        lead: "Updates done carefully.",
        text: "PHP, Laravel and package updates, tested before they go live.",
      },
      {
        lead: "Tests where it matters.",
        text: "Automated tests on the journeys your business depends on, so fixes stay fixed.",
      },
      {
        lead: "Monthly care.",
        text: "Someone who knows your app, on UK hours, for fixes and small changes.",
      },
    ],
    built_with:
      "Laravel 10 and 11, PHP 8, MySQL, Vue and React, on Linux servers with Nginx or Apache.",
    work: ["removals-system"],
    work_note: "I built this system and still look after it.",
    faq: [
      {
        q: "Do you rewrite everything?",
        a: "No. Most apps need fixing, not replacing. If a rewrite really is the better option, I explain why and you decide.",
      },
      {
        q: "Can you work on an app you did not build?",
        a: "Yes. I start by reading the code and telling you what I find, before any work is agreed.",
      },
      {
        q: "Will you sign an NDA first?",
        a: "Yes. I can sign yours, or send mine before you share any code.",
      },
    ],
  },
  {
    slug: "white-label-development",
    need: "agency",
    nav_label: "White-label work for agencies",
    seo_title: "White-label Laravel and PHP developer for agencies",
    seo_description:
      "Got more work than developers? I build and maintain Laravel and PHP projects under your brand, in your repository, on UK hours, under NDA.",
    h1: "White-label Laravel and PHP development for agencies",
    intro:
      "Got more work than developers? I build and maintain Laravel and PHP projects under your brand, in your repository, on UK hours. Your client deals with you.",
    signs_heading: "Sound familiar?",
    signs: [
      "You are turning work down, or pushing it back, for lack of developers.",
      "A client project needs Laravel or PHP skills your team does not have.",
      "Old client apps need looking after, and nobody wants to own them.",
      "You need extra hands for a few weeks, not a permanent hire.",
    ],
    includes_heading: "How I work with agencies",
    includes: [
      {
        lead: "Your brand, your client.",
        text: "I stay behind the scenes. Your client deals with you.",
      },
      {
        lead: "Your repository and process.",
        text: "I work in your Git repository, your ticket system and your review process.",
      },
      {
        lead: "UK hours.",
        text: "Monday to Friday, 9:00 to 17:30 UK time, while your team is working.",
      },
      {
        lead: "A fixed price per piece of work.",
        text: "A written scope and a fixed price, so your margin is clear before work starts.",
      },
      {
        lead: "NDA as standard.",
        text: "Signed before you share any client details.",
      },
    ],
    built_with: "Laravel, PHP, MySQL, Vue and React. Java and Spring Boot too.",
    work: ["removals-system", "property-pipeline"],
    work_note: "Both are production systems I built alone, from requirements to deployment.",
    faq: [
      {
        q: "Will my client see your name?",
        a: "No, unless you want them to. The work is yours to present.",
      },
      {
        q: "Can you join our tools?",
        a: "Yes. I work in whatever you use for tickets, chat and code review.",
      },
      {
        q: "Do you take small pieces of work?",
        a: "Yes. A single fix or feature gets a fixed price in my first reply.",
      },
    ],
  },
];

export const servicePageFor = (id: ServiceId) => servicePages.find((s) => s.service === id);
