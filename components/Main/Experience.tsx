import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

interface RoleHeaderProps {
  company: string;
  role: string;
  period: string;
  location: string;
}

const RoleHeader = ({ company, role, period, location }: RoleHeaderProps) => (
  <div className="mb-2">
    <div className="text-[1.15rem] font-bold text-[#343a3f]">{company}</div>
    <div className="text-[#576879] font-medium">
      {role} · {period} · {location}
    </div>
  </div>
);

interface ProjectBlockProps {
  name: string;
  bullets: string[];
}

const ProjectBlock = ({ name, bullets }: ProjectBlockProps) => (
  <div className="mt-3">
    <div className="font-semibold text-[#576879]">{name}</div>
    <ul className="mt-1 space-y-1 list-disc pl-5 text-[#34495e]">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

export const Experience = () => {
  return (
    <div id="experience" className="flex flex-col py-8 justify-center">
      <div className="pb-2">
        <span className="flex text-4xl uppercase font-bold text-[#343a3f]">
          Professional Experience
        </span>
      </div>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
        }}
      >
        {/* Prep Education */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <RoleHeader
              company="Prep Education (Công ty cổ phần công nghệ Prep)"
              role="Frontend Engineer"
              period="Jan 2025 – Present"
              location="Remote"
            />
            <p className="text-[#34495e] mb-2">
              Core FE on the AI Platform Group, building 4 internal tools that power LLM
              evaluation, data curation, and model artifact management for the AI organization.
              Stack: Next.js 14/15 (App Router), React 19, TypeScript, TailwindCSS v4, Shadcn UI,
              TanStack Query, Zustand, Zod, React Flow, Jest.
            </p>
            <ProjectBlock
              name="KC Labeling & Data Curation Platform"
              bullets={[
                'Architected graph-based KC visualization with React Flow + Dagre handling deep nested relations across thousands of nodes; implemented per-view filters, constraint checking, and list/focus modes.',
                'Built a multi-stage labeling workspace with Zod-validated decision workflows (8 actions: approve, defer, delete, duplicate, rename, split, fix-definition, fix-domain).',
                'Designed JWT auth flow (login, token refresh, role-based route guards) backed by a Zustand session store.',
                'Standardized list/detail patterns across modules through reusable UI primitives (toolbar, table, pagination, badges).',
              ]}
            />
            <ProjectBlock
              name="Data Lakehouse"
              bullets={[
                'Designed dataset management UI with 4-tier RBAC (Owner / Admin / Viewer / Developer) and lock/unlock workflows.',
                'Built Ground Truth evaluation table supporting multi-model selection, version comparison, and inline note tracking.',
                'Implemented dynamic schema-driven forms (React Hook Form + Zod) for nested task and metadata configuration.',
              ]}
            />
            <ProjectBlock
              name="AI Chat Playground & Evaluation Platform"
              bullets={[
                'Implemented streaming chat UI consuming Server-Sent Events via ReadableStream chunk parsing, with smart scroll-anchoring during real-time updates.',
                'Built virtualized message list (react-virtuoso) handling very long conversations smoothly with auto-scroll and intersection-based infinite loading.',
                'Developed end-to-end Evaluation module: test-set creation/import (drag & drop), session detail panel, side-by-side ground-truth comparison.',
                'Authored comprehensive Jest unit tests covering auth, change-password, profile, search, and form components.',
              ]}
            />
            <ProjectBlock
              name="Hive — AI Model & Dataset Repository (sole FE)"
              bullets={[
                'Owned end-to-end frontend architecture: feature-based folder structure, centralized React Query hooks with cache invalidation, App Router route groups.',
                'Eliminated N+1 request patterns via parallel useQueries for cross-repository version fetching.',
                'Built a Web-Worker-backed File Preview Dialog with tiered size guards (2MB inline preview / 10MB download-only) to prevent main-thread freezes on large JSON.',
                'Implemented a Git-like repo browser with debounced server-side search, infinite scroll, and JWT-protected middleware routing.',
              ]}
            />
          </TimelineContent>
        </TimelineItem>

        {/* Legato */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <RoleHeader
              company="Legato Technologies Limited"
              role="Frontend Engineer / Team Lead"
              period="Oct 2021 – Dec 2024"
              location="Hong Kong / Vietnam"
            />
            <p className="text-[#34495e] mb-2">
              Led FE delivery for 6 client projects across beauty-tech, hospitality, retail CRM,
              and e-commerce. Owned project lifecycle from discovery to delivery, code review, and
              stakeholder coordination with the October CMS team, mobile (iOS/Android) developers,
              and Hong Kong product stakeholders.
            </p>
            <ProjectBlock
              name="RiverX Maisi (Lead, team of 5 · 2 yrs)"
              bullets={[
                'Online platform connecting beauty practitioners with end users (web + mobile webview).',
                'Implemented multi-role auth (Customer / Practitioner / Corporate) with granular permission system.',
                'Integrated Stripe for membership renewals, sponsorships, and bookings; built service search, booking, and calendar flows.',
                'Delivered tri-lingual support (EN / Trad CN / Simp CN) and chat + voice/video via getstream.io.',
                'Stack: Next.js 13 (Pages Router), Redux Toolkit, React Hook Form + yup, Material UI, TailwindCSS.',
              ]}
            />
            <ProjectBlock
              name="Skechers Gift Redemption (Lead, team of 3)"
              bullets={[
                'Mobile web tool for staff to assist customers with gift redemptions.',
                'Implemented secure auth, multi-language i18n, and QR code scanning. Stack: Next.js 14 (App Router), React Query, Tailwind, Jest.',
              ]}
            />
            <ProjectBlock
              name="CSW Hotel (Lead, team of 4)"
              bullets={[
                'Public-facing hotel website with information browsing and room booking; SEO-optimized.',
                'Stack: Next.js 13 (Pages Router), Module CSS, TypeScript.',
              ]}
            />
            <ProjectBlock
              name="Overlander CRM · Swisscoat · Kowloon Dairy"
              bullets={[
                'Overlander (Lead): CRM membership platform with eCommerce integration. Next.js 12, Redux Toolkit, Module CSS.',
                'Swisscoat: online eyewear ordering platform (React, Redux).',
                'Kowloon Dairy: e-commerce site for HK milk brand on PWA Studio (maintenance + new features).',
              ]}
            />
          </TimelineContent>
        </TimelineItem>

        {/* Citynow */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <RoleHeader
              company="Citynow Company Limited"
              role="Frontend Developer"
              period="Oct 2020 – Apr 2021"
              location="Vietnam"
            />
            <ul className="mt-1 space-y-1 list-disc pl-5 text-[#34495e]">
              <li>
                Maintained and developed new features on HRSOL — an attendance solution for
                businesses (React, Redux, Ant Design, SCSS).
              </li>
            </ul>
          </TimelineContent>
        </TimelineItem>

        {/* Personal */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <RoleHeader
              company="Personal Projects"
              role="Full-stack Engineer"
              period="Jan 2021 – Present"
              location="Remote"
            />
            <ProjectBlock
              name="EduAttend — School Attendance & Management API (sole dev, Jan 2024 – Present)"
              bullets={[
                'End-to-end K-12 school management backend covering 18+ modules: onboarding, classes, timetables, attendance, grades, billing, parent notifications.',
                'Designed a layered Controller-Service-Repository architecture with auth/validation/RBAC middleware pipeline and a centralized DatabaseService.',
                'Implemented multi-token JWT (access / refresh / email-verify / forgot-password) with MongoDB TTL indexes and Redis-backed session state.',
                'Built a BullMQ async pipeline for AWS SES email delivery, plus node-cron jobs (daily attendance auto-close, expired token cleanup, parent notifications for absences).',
                'Authored full Swagger / OpenAPI 3.0 spec with interactive /api-docs UI and audit logging across all critical actions.',
                'Stack: Node.js, Express.js v5, TypeScript, MongoDB (native driver), Redis + BullMQ, JWT, AWS SES, FCM, node-cron.',
              ]}
            />
            <ProjectBlock
              name="Travel Blog (sole full-stack, Jan 2021 – Present)"
              bullets={[
                'Social blogging platform: register/login (JWT), write blogs, share visited places, follow others, like/search blogs, map view, real-time interactions via Socket.IO.',
                'Self-deployed to a VPS with an automated CI/CD pipeline.',
                'Stack: Next.js, React Query, TailwindCSS, Node.js + Express, MongoDB, Socket.IO. Live at tranhoangthien.id.vn.',
              ]}
            />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
