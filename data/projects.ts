export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  status: string; // true deployment status, e.g. "In production · UK client"
  statusTone: "prod" | "repo";
  stack: string[];
  problem: string;
  role: string;
  approach: string[];
  metrics: Metric[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "removals-system",
    name: "Removals operations platform",
    status: "In production · UK client",
    statusTone: "prod",
    stack: ["Laravel 10", "Vue 3", "Sanctum", "MySQL"],
    problem:
      "UK removals companies were running quotations, jobs, invoicing, payments and storage across spreadsheets and disconnected tools, with no single system of record, no client-facing views, and no control over who could change what.",
    role:
      "Sole engineer across the full SDLC: requirements, data modelling, implementation, testing, and deployment to a Linux VPS behind Nginx.",
    approach: [
      "Built and maintain a 100+ endpoint REST API spanning clients, quotations, jobs, invoicing, payments and storage, with automatic job / invoice numbering and PDF / spreadsheet generation.",
      "Designed the quotation domain across 7 related tables with change-activity logging and public, token-gated client views.",
      "Enforced a four-tier RBAC hierarchy (Spatie) with anti-escalation middleware, so no role can grant itself more power than it holds.",
      "Shipped verification, OTP, member-invite and public-quotation email flows on encrypted one-time tokens with 24-hour expiry.",
    ],
    metrics: [
      { value: "100+", label: "REST endpoints" },
      { value: "42", label: "controllers" },
      { value: "44", label: "Eloquent models" },
      { value: "69", label: "versioned migrations" },
    ],
  },
  {
    slug: "property-pipeline",
    name: "Property lead pipeline CRM",
    status: "In production · UK client",
    statusTone: "prod",
    stack: ["PHP 8.2", "Laravel 11", "MySQL", "Playwright"],
    problem:
      "A property-acquisition business needed to move every lead through a long, rule-bound pipeline, and needed certainty that deals could not skip stages, leak across companies, or generate offer documents by hand.",
    role:
      "Sole engineer, end to end: from data model to Linux VPS deployment, with an automated test suite guarding the whole flow.",
    approach: [
      "Modelled an 18-stage lead pipeline with kanban and summary views, and guarded stage-transition workflows so leads can only move along valid paths.",
      "Automated offer-document generation with DomPDF, removing a manual step from every deal.",
      "Implemented company-scoped multi-tenancy and Spatie role-based access control, plus a public lead-intake API for external sources.",
      "Wrote an end-to-end Playwright test suite covering the critical pipeline journeys.",
    ],
    metrics: [
      { value: "18", label: "pipeline stages" },
      { value: "Multi-tenant", label: "company-scoped" },
      { value: "E2E", label: "Playwright coverage" },
      { value: "Automated", label: "offer documents" },
    ],
  },
  {
    slug: "builderconnect",
    name: "BuilderConnect",
    status: "Public repo · Final Year Project",
    statusTone: "repo",
    stack: ["Java 17", "Spring Boot 3.2", "React 18 + TS", "MySQL", "Stripe"],
    problem:
      "Construction clients, builders and suppliers had no common marketplace: no way to post projects, bid, message in real time, or pay, and with the abuse, billing and consistency problems a three-sided market brings.",
    role:
      "Designed and built the whole platform: a 110-endpoint REST API, the React front end, billing, real-time messaging, and an AI feature suite.",
    approach: [
      "Implemented stateless JWT auth (access / refresh rotation, BCrypt, account lockout), with suspension enforced live at the security-filter and WebSocket layers, plus per-IP rate limiting.",
      "Integrated Stripe subscription billing: hosted checkout, signature-verified webhooks and idempotent payment recording, with per-plan feature limits enforced at the service layer.",
      "Built real-time chat and notifications over STOMP / WebSocket with CONNECT- and SUBSCRIBE-level authorization; modelled orders as a validated state machine with pessimistic row locking.",
      "Shipped an AI suite on a pluggable LLM layer (Anthropic Claude / Google Gemini): a knowledge-grounded FAQ chatbot and structured-JSON floor-plan generation.",
    ],
    metrics: [
      { value: "110", label: "REST endpoints" },
      { value: "42", label: "JPA entities" },
      { value: "47", label: "Flyway migrations" },
      { value: "29", label: "services" },
    ],
    links: [
      { label: "View source on GitHub", href: "https://github.com/alihasansheikh/BuilderConnect-Version-x/" },
    ],
  },
];

export const stacks = [
  {
    title: "Java / Spring",
    items: [
      "Spring Boot 3",
      "Spring Security (JWT)",
      "Spring Data JPA / Hibernate",
      "WebSocket / STOMP",
      "Flyway",
      "Maven",
      "Swagger / OpenAPI",
    ],
  },
  {
    title: "PHP / Laravel",
    items: [
      "Laravel 10 / 11",
      "Eloquent ORM",
      "Sanctum",
      "Spatie Permission",
      "Multi-tenant SaaS architecture",
      "DomPDF",
    ],
  },
  {
    title: "Data & Infrastructure",
    items: [
      "MySQL / MariaDB: schema design, indexing, transactions, row locking",
      "Redis caching",
      "Linux VPS · Nginx / Apache",
      "CI/CD: GitHub Actions, Jenkins",
      "Git / GitHub",
    ],
  },
  {
    title: "Frontend & Testing",
    items: [
      "React 18 · TypeScript",
      "Vue 3 · Tailwind CSS",
      "JUnit · PHPUnit",
      "Playwright · Selenium",
      "Postman",
    ],
  },
];
