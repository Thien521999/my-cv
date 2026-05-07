import React from 'react';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    name: 'Travel Blog',
    desc: 'Personal full-stack social blogging platform with map and real-time interactions.',
    url: 'http://tranhoangthien.id.vn',
  },
  {
    name: 'RiverX Maisi',
    desc: 'Beauty-services marketplace connecting practitioners and end users (HK).',
    url: 'https://www-uat.maisiapp.com/',
  },
  {
    name: 'CSW Hotel',
    desc: 'Hotel booking website for West Kowloon (HK).',
    url: 'https://westkowloon.townplace.com.hk/',
  },
  {
    name: 'Overlander CRM',
    desc: 'CRM membership platform integrated with the Overlander eCommerce store.',
    url: 'https://overlander-crm-uat.legato-concept.com/',
  },
];

export const Project = () => {
  return (
    <div id="project" className="flex flex-col py-8 min-h-screen justify-center">
      <div className="pb-8 text-4xl uppercase font-bold text-[#343a3f]">
        <span>Featured Projects</span>
      </div>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li
            key={p.name}
            className="flex flex-col sm:flex-row sm:items-baseline gap-x-3"
          >
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#39ada9] hover:text-[#f9983a] inline-flex items-center gap-1 whitespace-nowrap"
            >
              {p.name} <LaunchIcon fontSize="small" />
            </a>
            <span className="text-[#34495e]">{p.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
