import React from 'react';

const categories = [
  {
    label: 'Languages',
    items: 'TypeScript, JavaScript (ES6+), HTML5, CSS3',
  },
  {
    label: 'Frameworks & Runtimes',
    items:
      'Next.js (App + Pages Router), React 19, Node.js, Express.js v5, NestJS (learning)',
  },
  {
    label: 'State & Data',
    items:
      'Zustand, Redux Toolkit, Redux-thunk, TanStack Query, React Hook Form, Zod, yup',
  },
  {
    label: 'UI & Styling',
    items: 'TailwindCSS v4, Shadcn UI, Material UI, Ant Design, Framer Motion, Module CSS',
  },
  {
    label: 'Specialized FE',
    items:
      'SSE / streaming, React Flow + Dagre, Web Workers, react-virtuoso, Socket.IO, react-markdown, PWA Studio',
  },
  {
    label: 'Backend & Infrastructure',
    items:
      'MongoDB, Redis, BullMQ, JWT, AWS SES, Swagger / OpenAPI 3.0, FCM, node-cron, Docker',
  },
  {
    label: 'Testing',
    items: 'Jest, React Testing Library',
  },
  {
    label: 'Tooling & Workflow',
    items:
      'Git / GitFlow, CI/CD (VPS, GitHub Actions), Figma, ESLint, Prettier, Husky, Yarn, VS Code',
  },
];

export const Skills = () => {
  return (
    <div id="skill" className="flex flex-col py-8 min-h-screen justify-center">
      <div className="pb-8 text-4xl uppercase font-bold text-[#343a3f]">
        <span>Core Competencies</span>
      </div>
      <div className="grid sm:grid-cols-[200px_1fr] gap-y-4 gap-x-6 text-[1rem] text-[#34495e]">
        {categories.map((c) => (
          <React.Fragment key={c.label}>
            <div className="font-semibold text-[#576879]">{c.label}</div>
            <div>{c.items}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
