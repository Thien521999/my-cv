import React from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-4">
    <h2 className="text-[11pt] font-bold uppercase tracking-[0.12em] text-black border-b border-black pb-1 mb-2">
      {title}
    </h2>
    {children}
  </section>
);

const RoleHeader = ({
  company,
  meta,
  period,
}: {
  company: string;
  meta: string;
  period: string;
}) => (
  <div className="mt-2">
    <div className="flex justify-between items-baseline">
      <span className="font-bold text-[10.5pt]">{company}</span>
      <span className="text-[9.5pt] italic">{period}</span>
    </div>
    <div className="text-[9.5pt] italic text-neutral-800">{meta}</div>
  </div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="leading-snug">{children}</li>
);

const Project = ({ name, bullets }: { name: string; bullets: string[] }) => (
  <div className="mt-1.5 pl-3">
    <div className="font-semibold text-[10pt]">{name}</div>
    <ul className="list-disc pl-5 text-[9.5pt] mt-0.5 space-y-0.5">
      {bullets.map((b, i) => (
        <Bullet key={i}>{b}</Bullet>
      ))}
    </ul>
  </div>
);

export const PrintView = () => {
  return (
    <div
      className="print-view hidden print:block text-black"
      style={{ fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Header */}
      <header className="text-center pb-2 border-b-2 border-black">
        <h1 className="text-[22pt] font-bold tracking-tight leading-tight">TRAN HOANG THIEN</h1>
        <div className="text-[11pt] mt-0.5 tracking-wide uppercase">
          Senior Frontend Engineer · Aspiring Full-Stack
        </div>
        <div className="text-[9.5pt] mt-1.5 flex flex-wrap justify-center gap-x-3 gap-y-0.5">
          <span>Da Nang, Vietnam</span>
          <span>·</span>
          <span>0387878335</span>
          <span>·</span>
          <span>tranhoangthiendev@gmail.com</span>
          <span>·</span>
          <span>github.com/Thien521999</span>
          <span>·</span>
          <span>linkedin.com/in/tran-hoang-thien</span>
        </div>
      </header>

      {/* Summary */}
      <Section title="Summary">
        <p className="text-[10pt] leading-snug text-justify">
          Frontend engineer with <strong>5+ years</strong> building scalable Next.js / React
          applications across Hong Kong and Vietnam markets. Specialized in App Router architecture,
          real-time UIs (SSE streaming, virtualized lists, graph visualization with React Flow), and
          design-system-driven component libraries on top of Shadcn UI / Material UI / Ant Design.
          Currently expanding into Node.js / NestJS backend through personal full-stack projects to
          deliver end-to-end product impact — from API design and authentication to deployment and
          observability.
        </p>
      </Section>

      {/* Experience */}
      <Section title="Professional Experience">
        {/* Prep */}
        <RoleHeader
          company="Prep Education (Công ty cổ phần công nghệ Prep)"
          meta="Frontend Engineer · Remote"
          period="Jan 2025 – Present"
        />
        <p className="text-[9.5pt] mt-1 leading-snug">
          Core FE on the AI Platform Group, building 4 internal tools that power LLM evaluation,
          data curation, and model artifact management. Stack: Next.js 14/15 (App Router), React 19,
          TypeScript, TailwindCSS v4, Shadcn UI, TanStack Query, Zustand, Zod, React Flow, Jest.
        </p>
        <Project
          name="KC Labeling & Data Curation Platform"
          bullets={[
            'Architected graph-based KC visualization with React Flow + Dagre handling deep nested relations across thousands of nodes; implemented per-view filters, constraint checking, and list/focus modes.',
            'Built a multi-stage labeling workspace with Zod-validated decision workflows (8 actions: approve, defer, delete, duplicate, rename, split, fix-definition, fix-domain).',
            'Designed JWT auth flow with role-based route guards backed by a Zustand session store; standardized list/detail patterns through reusable UI primitives.',
          ]}
        />
        <Project
          name="Data Lakehouse"
          bullets={[
            'Designed dataset management UI with 4-tier RBAC (Owner / Admin / Viewer / Developer) and lock/unlock workflows.',
            'Built Ground Truth evaluation table supporting multi-model selection, version comparison, and inline note tracking; implemented dynamic schema-driven forms via React Hook Form + Zod.',
          ]}
        />
        <Project
          name="AI Chat Playground & Evaluation Platform"
          bullets={[
            'Implemented streaming chat UI consuming Server-Sent Events via ReadableStream chunk parsing, with smart scroll-anchoring during real-time updates.',
            'Built virtualized message list (react-virtuoso) handling very long conversations with auto-scroll and intersection-based infinite loading.',
            'Developed end-to-end Evaluation module: test-set creation/import (drag & drop), session detail panel, side-by-side ground-truth comparison; authored comprehensive Jest unit tests.',
          ]}
        />
        <Project
          name="Hive — AI Model & Dataset Repository (sole FE)"
          bullets={[
            'Owned end-to-end frontend architecture; eliminated N+1 request patterns via parallel useQueries for cross-repository version fetching.',
            'Built a Web-Worker-backed File Preview Dialog with tiered size guards (2MB inline / 10MB download-only) to prevent main-thread freezes on large JSON.',
            'Implemented a Git-like repo browser with debounced server-side search, infinite scroll, and JWT-protected middleware routing.',
          ]}
        />

        {/* Legato */}
        <RoleHeader
          company="Legato Technologies Limited"
          meta="Frontend Engineer / Team Lead · Hong Kong / Vietnam"
          period="Oct 2021 – Dec 2024"
        />
        <p className="text-[9.5pt] mt-1 leading-snug">
          Led FE delivery for 6 client projects across beauty-tech, hospitality, retail CRM, and
          e-commerce. Owned project lifecycle, code review, and stakeholder coordination with the
          October CMS team, mobile (iOS/Android) developers, and Hong Kong product stakeholders.
        </p>
        <Project
          name="RiverX Maisi — Lead, team of 5 (2 yrs)"
          bullets={[
            'Online platform connecting beauty practitioners with end users (web + mobile webview).',
            'Implemented multi-role auth (Customer / Practitioner / Corporate), Stripe payments for memberships and bookings, service search with calendar booking flows.',
            'Delivered tri-lingual support (EN / Trad CN / Simp CN) and chat + voice/video via getstream.io. Stack: Next.js 13 (Pages Router), Redux Toolkit, RHF + yup, Material UI, TailwindCSS.',
          ]}
        />
        <Project
          name="Skechers Gift Redemption — Lead, team of 3"
          bullets={[
            'Mobile web tool for staff to assist customers with gift redemptions: secure auth, multi-language i18n, and QR code scanning. Stack: Next.js 14 (App Router), React Query, Tailwind, Jest.',
          ]}
        />
        <Project
          name="CSW Hotel · Overlander CRM · Swisscoat · Kowloon Dairy"
          bullets={[
            'CSW Hotel (Lead, team of 4): SEO-optimized hotel booking site. Next.js 13 (Pages Router), Module CSS.',
            'Overlander CRM (Lead): membership platform with eCommerce integration. Next.js 12, Redux Toolkit.',
            'Swisscoat: online eyewear ordering platform (React, Redux). Kowloon Dairy: HK milk e-commerce on PWA Studio.',
          ]}
        />

        {/* Citynow */}
        <RoleHeader
          company="Citynow Company Limited"
          meta="Frontend Developer · Vietnam"
          period="Oct 2020 – Apr 2021"
        />
        <ul className="list-disc pl-8 text-[9.5pt] mt-1 space-y-0.5">
          <li>
            Maintained and developed new features on HRSOL — an attendance solution for businesses
            (React, Redux, Ant Design, SCSS).
          </li>
        </ul>

        {/* Personal */}
        <RoleHeader
          company="Personal Projects"
          meta="Full-stack Engineer · Remote"
          period="Jan 2021 – Present"
        />
        <Project
          name="EduAttend — School Attendance & Management API (sole dev, Jan 2024 – Present)"
          bullets={[
            'End-to-end K-12 school management backend covering 18+ modules: onboarding, classes, timetables, attendance, grades, billing, parent notifications.',
            'Designed layered Controller-Service-Repository architecture; implemented multi-token JWT (access / refresh / email-verify / forgot-password) with MongoDB TTL indexes and Redis-backed session state.',
            'Built BullMQ async pipeline for AWS SES emails and node-cron jobs (auto-close attendance, expired token cleanup, parent absence notifications); authored full Swagger / OpenAPI 3.0 spec.',
            'Stack: Node.js, Express.js v5, TypeScript, MongoDB, Redis + BullMQ, JWT, AWS SES, FCM.',
          ]}
        />
        <Project
          name="Travel Blog — sole full-stack (Jan 2021 – Present)"
          bullets={[
            'Social blogging platform: register/login (JWT), blogs, visited places, follow flow, like/search, map view, real-time interactions via Socket.IO.',
            'Self-deployed to a VPS with an automated CI/CD pipeline. Stack: Next.js, React Query, TailwindCSS, Node.js + Express, MongoDB, Socket.IO. Live at tranhoangthien.id.vn.',
          ]}
        />
      </Section>

      {/* Skills */}
      <Section title="Core Competencies">
        <div className="grid grid-cols-[140px_1fr] gap-y-1 text-[9.5pt] leading-snug">
          <div className="font-semibold">Languages</div>
          <div>TypeScript, JavaScript (ES6+), HTML5, CSS3</div>

          <div className="font-semibold">Frameworks</div>
          <div>
            Next.js (App + Pages Router), React 19, Node.js, Express.js v5, NestJS (learning)
          </div>

          <div className="font-semibold">State & Data</div>
          <div>
            Zustand, Redux Toolkit, Redux-thunk, TanStack Query, React Hook Form, Zod, yup
          </div>

          <div className="font-semibold">UI & Styling</div>
          <div>TailwindCSS v4, Shadcn UI, Material UI, Ant Design, Framer Motion, Module CSS</div>

          <div className="font-semibold">Specialized FE</div>
          <div>
            SSE / streaming, React Flow + Dagre, Web Workers, react-virtuoso, Socket.IO,
            react-markdown, PWA Studio
          </div>

          <div className="font-semibold">Backend & Infra</div>
          <div>
            MongoDB, Redis, BullMQ, JWT, AWS SES, Swagger / OpenAPI 3.0, FCM, node-cron, Docker
          </div>

          <div className="font-semibold">Testing</div>
          <div>Jest, React Testing Library</div>

          <div className="font-semibold">Tooling</div>
          <div>Git / GitFlow, CI/CD (VPS, GitHub Actions), Figma, ESLint, Prettier, Husky</div>
        </div>
      </Section>

      {/* Education */}
      <Section title="Education & Certifications">
        <div className="flex justify-between text-[9.5pt]">
          <div>
            <div className="font-bold">University of Science (HCMUS)</div>
            <div className="italic">Bachelor of Mathematics and Computer Science</div>
          </div>
          <div className="italic">Oct 2017 – Jan 2021</div>
        </div>
        <div className="flex justify-between mt-1.5 text-[9.5pt]">
          <div>
            <span className="font-bold">TOEIC Certificate</span> — Score: 600
          </div>
          <div className="italic">2017</div>
        </div>
      </Section>
    </div>
  );
};
