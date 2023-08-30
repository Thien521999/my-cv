import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export const Experience = () => {
  return (
    <div id="experience" className="flex flex-col p-12 min-h-screen justify-center">
      <div className=" pb-2 #000000">
        <span className="flex text-4xl uppercase font-bold text-[#343a3f]">Experience</span>
      </div>
      <div className="mt-1 pt-4">
        <div className="text-[#079992] text-2xl font-bold uppercase">
          Legato Technologies Limited
        </div>
        <div className="mb-4 text-[#34495e] text-1xl font-medium">FRONT-END ENGINEER</div>
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
              <strong>
                05/2023 - current
                <br />
              </strong>
              {/* <div>Role: Front-end</div> */}
              <div>Resoures: 3 members (FE)</div>
              <div>
                Knowledge achievement: Next JS, React Hooks, Redux-toolkit, Material UI, REST API,
                Git extension, SEO
              </div>
              <div>{`Project: Hotel booking website `}</div>
              <div>
                The main task: Set up the code base, build the project from scratch, develop and
                assist the debugging team
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <strong>
                01/2023 - 05/2023
                <br />
              </strong>
              {/* <div>Role: Front-end</div> */}
              <div>Resoures: 2 members (FE)</div>
              <div>
                Knowledge achievement: Next JS, React Hooks, Redux-toolkit, Material UI, REST API,
                Git extension, Drag and Drop
              </div>
              <div>{`Project: Website to manage the garage's repair schedule`}</div>
              <div>
                The main task: Set up the code base, build the project from scratch, develop and
                assist the debugging team
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <strong>
                11/2022 - 01/2023
                <br />
              </strong>
              {/* <div>Role: Front-end</div> */}
              <div>Resoures: 2 members (FE)</div>
              <div>
                Knowledge achievement: Next JS, React Hooks, Redux-toolkit, Material UI, REST API,
                Git extension
              </div>
              <div>Project: Website selling eyeglasses for Hong Kong</div>
              <div>The main task: Maintain and develop the project, refactor the code</div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <strong>
                11/2021 - 11/2022
                <br />
              </strong>
              {/* <div>Role: Front-end</div> */}
              <div>Resoures: 3 members (FE)</div>
              <div>
                Knowledge achievement: Next JS, React Hooks, Redux-toolkit, Material UI, REST API,
                Git extension
              </div>
              <div>Project: Customer relationship management</div>
              <div>
                The main task: Set up the code base, build the project from scratch, develop and
                assist the debugging team
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <strong>
                04/2021 - 11/2021
                <br />
                E-commerce
              </strong>
              {/* <div>Role: Front-end</div> */}
              <div>Resoures: 6 members (FE), 3 members (BE)</div>
              <div>
                Knowledge achievement:PWA magento 2, React JS, React Hooks, Git extension, GraphQl
              </div>
              <div>Project: E-commerce website for selling milk in Hong Kong</div>
              <div>
                The main task: Maintain and develop more new features according to customer
                requirements.
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <div className="pt-6 text-[#079992] text-2xl font-bold uppercase">
          Citynow Company Limited
        </div>
        <div className="mb-4 text-[#34495e] text-1xl font-medium">FRONT-END ENGINEER</div>
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
            </TimelineSeparator>
            <TimelineContent>
              <strong>
                01/2021 - 04-2021
                <br />
                First Interactive Technology
              </strong>
              <div>Role: Interns, Front-end(maintenance)</div>
              <div>Resoures: 3 members (FE)</div>
              <div>
                Knowledge achievement: HTML, CSS, Javascript, React/Next, Typescript, Redux,
                Redux-toolkit, Material-UI, Atomic Design, Git extension,...{' '}
              </div>
              <div>Project: HRSOL(Human Resource Solution)</div>
              <div>The main task: Maintain and develop the project, refactor the code</div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};
