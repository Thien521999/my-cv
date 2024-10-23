import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export const Experience = () => {
  return (
    <div id="experience" className="flex flex-col py-8 min-h-screen justify-center">
      <div className=" pb-2 #000000">
        <span className="flex text-4xl uppercase font-bold text-[#343a3f]">Experience</span>
      </div>
      <div className="mt-1 pt-4">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <strong>10/2021 - current:</strong>
                <br />
                <strong>Legato Technologies Limited</strong>
              </div>
              <div>● Role: Front-end developer / Team Lead.</div>
              <div>● Resoures: 4 members</div>
              <div>
                ● Tech stack: Next.js, React, React-Query, Hooks, Context, Redux, Redux-toolkit,
                Material UI, Tailwindcss, REST API, SEO
              </div>
              <div>
                ● The main task:
                <ul className="pl-3">
                  <li>
                    ➤ Built and developed the project from scratch, which included designing and
                    implementing various features as well as optimizing the code for improved
                    performance and maintainability.
                  </li>
                  <li>
                    ➤ Collaborate closely with multiple stakeholders, including the October CMS
                    team, Android and iOS app developers, the Design team, Project Management, and
                    other key stakeholders in Vietnam and Hong Kong to ensure seamless integration
                    and alignment across platforms.
                  </li>
                  <li>➤ Assisted team members with code merging and code reviews.</li>
                  <li>
                    ➤ Proposed technical solutions to resolve issues and supported bug fixing.
                  </li>
                </ul>
              </div>
              <div>
                ● Project:
                <ul className="pl-3">
                  <li>
                    ➤ RiverX: RiverX Maisi is an online platform, available both as a web and mobile
                    app, aimed at connecting beauty practitioners (e.g., hair stylists, spa
                    therapists, beauticians....) with end users. The platform allows beauty
                    professionals to grow their client base, while providing users with a seamless
                    solution to discover practitioners and book services. By simplifying the search
                    and booking process, RiverX Maisi delivers a user-friendly and efficient
                    experience for both clients and beauty service providers. Built using Next.js .
                  </li>
                  <li>
                    ➤ Skechers: Staff who use the gift redemption mobile web interface to assist
                    customers with gift redemptions. Built using Next.js
                  </li>
                  <li>
                    ➤ CSW Hotel: Website users are customers, who can browse the information of the
                    hotel and make room bookings through the website. Built using Next.js .
                  </li>
                  <li>
                    ➤ Overlander: CRM Web users are consumers of The Overlander physical or online
                    stores. They will register as a CRM member via CRM Web or eCommerce website to
                    participate in the customer relationship program. Built using Next.js .
                  </li>
                  <li>
                    ➤ Swisscoat: An online platform for ordering glasses for customers in Hong Kong.
                    Built using React.{' '}
                  </li>
                  <li>
                    ➤ Kowloon Dairy: E-commerce websites and App for Kowloon Dairy, a milk brand in
                    Hong Kong (Maintenance Support). Built using PWA-Studio.
                  </li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <strong>10/2020 - 04-2021:</strong>
                <br />
                <strong>Citynow Company Limited</strong>
              </div>
              <div>● Role: Front-end developer </div>
              <div>● Tech stack: React, React hooks, Redux, Ant design, REST API</div>
              <div>● The main task: Maintain and develop the project, refactor the code</div>
              <div>
                ● Project:
                <ul className="pl-3">
                  <li>➤ HRSOL: Attendance solution for businesses. Built using React.</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <strong>01/2020 - 10/2021:</strong>
                <br />
                <strong>Personal Project</strong>
              </div>
              <div>● Role: Fullstack developer </div>
              <div>
                ● Tech stack: React, React hooks, Redux-toolkit, Material UI, Node.JS, TypeScript,
                ExpressJS, MongoDB, REST API
              </div>
              <div>
                ● The main task: Built and developed the project from scratch, including
                implementing features and optimizing the code.
              </div>
              <div>
                ● Project:
                <ul className="pl-3">
                  <li>
                    ➤ Blog app: Personal post management system that enables users to create, edit,
                    and organize their content effectively.
                  </li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};
