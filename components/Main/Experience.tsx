import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export const Experience = () => {
  return (
    <div>
      <div className="border-b-2 mt-4 pb-2 #000000">
        <span>Experience</span>
      </div>
      <div className="mt-1 pt-4 hover:shadow-inner">
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
                10/2022 - Current
                <br />
              </strong>
              <div>Role: Front-end</div>
              <div>Resoures: 2 members (FE)</div>
              <div>Knowledge achievement: Next JS, React Hooks, Redux-toolkit, Material UI, REST API, Git extension, Drag and Drop</div>
              <div>{`Project: Website to manage the garage's repair schedule`}</div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <strong>
                02/2021 - 10/2022
                <br />
              </strong>
              <div>Role: Front-end</div>
              <div>Resoures: 2 members (FE)</div>
              <div>Knowledge achievement: Next JS, React Hooks, Redux-toolkit, Material UI, REST API, Git extension</div>
              <div>Project:</div>
              <ul>
                <li>-Customer relationship management</li>
                <li>-Website selling eyeglasses for Hong Kong</li>
              </ul>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <strong>
                10/2021 - 01/2022
                <br />
                E-commerce
              </strong>
              <div>Role: Front-end</div>
              <div>Resoures: 6 members (FE)</div>
              <div>Knowledge achievement:PWA magento 2, React JS, React Hooks, Git extension, GraphQl</div>
              <div>Project: E-commerce website for selling milk in Hong Kong</div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <strong>
                04/2021 - 07-2021
                <br />
                First Interactive Technology
              </strong>
              <div>Role: Interns, Front-end(maintenance)</div>
              <div>Resoures: 2 members (FE)</div>
              <div>
                Knowledge achievement: HTML, CSS, Javascript, React/Next, Typescript, Redux, Redux-toolkit,  Material-UI,
                Ant-design, Atomic Design, Git extension,...{' '}
              </div>
              <div>Project: HRSOL(Human Resource Solution)</div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};
