import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const email = 'tranhoangthiendev@gmail.com';
const phone = '0387878335';
const location = 'Da Nang, Vietnam';
const github = 'https://github.com/Thien521999';
const linkedin =
  'https://www.linkedin.com/in/tr%E1%BA%A7n-ho%C3%A0ng-thi%C3%AAn-07ba91182/';

export const About = () => {
  return (
    <div id="about" className="flex flex-col py-8 min-h-screen justify-center">
      <h1 className="text-5xl mb-2 font-bold text-[#343a3f]">Tran Hoang Thien</h1>
      <h2 className="text-2xl mb-5 font-medium text-[#39ada9]">
        Senior Frontend Engineer · Aspiring Full-Stack
      </h2>

      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] text-[#34495e] mb-6">
        <span className="flex items-center gap-1">
          <LocationOnIcon fontSize="small" /> {location}
        </span>
        <span className="flex items-center gap-1">
          <CallIcon fontSize="small" /> {phone}
        </span>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-1 hover:text-[#f9983a]"
        >
          <EmailIcon fontSize="small" /> {email}
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-[#f9983a]"
        >
          <GitHubIcon fontSize="small" /> github.com/Thien521999
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-[#f9983a]"
        >
          <LinkedInIcon fontSize="small" /> LinkedIn
        </a>
      </div>

      <div className="border-l-4 border-[#39ada9] pl-4 py-1 text-[1.05rem] leading-relaxed text-[#34495e]">
        <p className="mb-2">
          Frontend engineer with <strong>5+ years</strong> building scalable Next.js / React
          applications across Hong Kong and Vietnam markets. Specialized in App Router architecture,
          real-time UIs (SSE streaming, virtualized lists, graph visualization with React Flow),
          and design-system-driven component libraries on top of Shadcn UI / Material UI / Ant
          Design.
        </p>
        <p>
          Currently expanding into Node.js / NestJS backend through personal full-stack projects to
          deliver end-to-end product impact — from API design and authentication to deployment and
          observability.
        </p>
      </div>
    </div>
  );
};
