import { Card } from '../Common/Card';
import React from 'react';

const listCollaborate = [
  {
    id: 1,
    name: 'Vs Code',
    color: '#c41d7f',
    colorBorder: '#ffadd2',
    bgColor: '#ffadd2',
  },
  {
    id: 2,
    name: 'Yarn',
    color: '#cf1322',
    colorBorder: '#ffa39e',
    bgColor: '#fff1f0',
  },
  {
    id: 3,
    name: 'Prettier',
    color: '#d46b08',
    colorBorder: '#ffd591',
    bgColor: '#fff7e6',
  },
  {
    id: 4,
    name: 'Git Flow',
    color: '#d48806',
    colorBorder: '#ffe58f',
    bgColor: '#fffbe6',
  },
  {
    id: 5,
    name: 'Figma',
    color: '#389e0d',
    colorBorder: '#b7eb8f',
    bgColor: '#f6ffed',
  },
  {
    id: 6,
    name: 'Discord',
    color: '#08979c',
    colorBorder: '#87e8de',
    bgColor: '#e6fffb',
  },
];

const listStyle = [
  {
    id: 1,
    name: 'Flex',
    color: '#c41d7f',
    colorBorder: '#ffadd2',
    bgColor: '#ffadd2',
  },
  {
    id: 2,
    name: 'Grid',
    color: '#cf1322',
    colorBorder: '#ffa39e',
    bgColor: '#ffffff',
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    color: '##d4380d',
    colorBorder: '#ffbb96',
    bgColor: '#fff2e8',
  },
  {
    id: 4,
    name: 'Material UI',
    color: '#c41d7f',
    colorBorder: '#ffadd2',
    bgColor: '#fff0f6',
  },
  {
    id: 5,
    name: 'styled components',
    color: '#08979c',
    colorBorder: '#87e8de',
    bgColor: '#e6fffb',
  },
];
const listTech = [
  {
    id: 1,
    name: 'Typescript',
    color: '#c41d7f',
    colorBorder: '#ffadd2',
    bgColor: '#ffffff',
  },
  {
    id: 2,
    name: 'React',
    color: '#cf1322',
    colorBorder: '#ffa39e',
    bgColor: '#ffffff',
  },
  {
    id: 3,
    name: 'NextJs',
    color: '##d4380d',
    colorBorder: '#ffbb96',
    bgColor: '#fff2e8',
  },
  {
    id: 4,
    name: 'Format.JS',
    color: '#7cb305',
    colorBorder: '#eaff8f',
    bgColor: '#fcffe6',
  },
  {
    id: 5,
    name: 'Rest API',
    color: '#c41d7f',
    colorBorder: '#ffadd2',
    bgColor: '#fff0f6',
  },
  {
    id: 6,
    name: 'Redux Toolkit',
    color: '#08979c',
    colorBorder: '#87e8de',
    bgColor: '#e6fffb',
  },
  {
    id: 6,
    name: 'React query',
    color: '#c41d7f',
    colorBorder: '#ffadd2',
    bgColor: '#ffadd2',
  },
  {
    id: 6,
    name: 'React Hook Form',
    color: '#d48806',
    colorBorder: '#ffe58f',
    bgColor: '#fffbe6',
  },
  {
    id: 6,
    name: 'Context',
    color: '#389e0d',
    colorBorder: '#b7eb8f',
    bgColor: '#f6ffed',
  },
  {
    id: 6,
    name: 'PWA Studio',
    color: '#cf1322',
    colorBorder: '#ffa39e',
    bgColor: '#ffffff',
  },
];

const listOther = [
  {
    id: 1,
    name: 'NodeJs',
    color: '#c41d7f',
    colorBorder: '#ffadd2',
    bgColor: '#ffffff',
  },
  {
    id: 2,
    name: 'Express',
    color: '#389e0d',
    colorBorder: '#b7eb8f',
    bgColor: '#f6ffed',
  },
  {
    id: 2,
    name: 'MySql',
    color: '#d46b08',
    colorBorder: '#ffd591',
    bgColor: '#fff7e6',
  },
];

export const Skills = () => {
  return (
    <div>
      <div className="border-b-2 mt-4 pb-2 #000000">
        <span>Skills</span>
      </div>
      <div className="hover:shadow-inner">
        <div className="mt-1 p-6">
          <div>
            Collaborate:&nbsp;
            {listCollaborate.map((item) => (
              <Card
                key={item.id}
                color={`${item.color}`}
                colorBorder={`${item.colorBorder}`}
                bgColor={`${item.bgColor}`}
              >
                {item.name}
              </Card>
            ))}
          </div>
          <div className="my-4">
            {`
			I took the design from the designer's Figma, analyzed and divided the project into tasks and divided among the team members using excel, Trello/Discord. Then I created the codebase with plugins like Yarn, Husky, lint-staged, Prettier, Git Flow to ensure uniformity in a collective.
		`}
          </div>
        </div>
        <div className="mt-1 p-6">
          <div>
            Styling:&nbsp;
            {listStyle.map((item) => (
              <Card
                key={item.id}
                color={`${item.color}`}
                colorBorder={`${item.colorBorder}`}
                bgColor={`${item.bgColor}`}
              >
                {item.name}
              </Card>
            ))}
          </div>
          <div className="my-4">
            I can create beautiful responsive designs with the help of various UI libraries.
          </div>
        </div>
        <div className="mt-1 p-6">
          <div>
            React/Next:&nbsp;
            {listTech.map((item) => (
              <Card
                key={item.id}
                color={`${item.color}`}
                colorBorder={`${item.colorBorder}`}
                bgColor={`${item.bgColor}`}
              >
                {item.name}
              </Card>
            ))}
          </div>
          <div className="my-4">
            I have developed many websites using NextJS/React + Typescript, using Redux Toolkit for
            state management, communicating with Rest API to get data.
          </div>
        </div>
        {/* <div className="mt-1 p-6">
          <div>
            NodeJs:&nbsp;
            {listOther.map((item) => (
              <Card
                key={item.id}
                color={`${item.color}`}
                colorBorder={`${item.colorBorder}`}
                bgColor={`${item.bgColor}`}
              >
                {item.name}
              </Card>
            ))}
          </div>
          <div className="my-4">
            I use BE nodeJS to be able to create api, apply some personal projects
          </div>
        </div> */}
      </div>
    </div>
  );
};
