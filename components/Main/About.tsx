import React from 'react';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const links = [
  {
    id: 1,
    img: <LinkedInIcon />,
    link: 'https://www.linkedin.com/in/tr%E1%BA%A7n-ho%C3%A0ng-thi%C3%AAn-07ba91182/',
  },
  {
    id: 2,
    img: <GitHubIcon />,
    link: 'https://github.com/Thien521999',
  },
  {
    id: 3,
    img: <TwitterIcon />,
    link: 'https://twitter.com',
  },
  {
    id: 4,
    img: <FacebookIcon />,
    link: 'https://www.facebook.com/profile.php?id=100007018217773',
  },
];
const email = 'tranhoangthiendev@gmail.com';

export const About = () => {
  return (
    <div id="about" className="flex flex-col p-12 min-h-screen justify-center">
      <h1 className="flex text-6xl mb-3 uppercase font-bold text-[#343a3f]">Trần Hoàng Thiên</h1>
      <div className="flex items-center font-medium mb-2 text-1xl text-[#34495e]">
        <span className="mr-2">
          <AccountBoxIcon />
        </span>
        FRONT END DEVELOPER
      </div>
      <div className="flex items-center font-medium mb-2 text-1xl text-[#34495e]">
        <span className="mr-2">
          <AddLocationIcon />
        </span>
        719 TA QUANG BUU, WARD 4, DISTRICT 8, HCM CITY - &nbsp;
        <a href={`mailto:${email}`} className="text-[#39ada9] hover:text-[#f9983a]">
          tranhoangthiendev@gmail.com
        </a>
      </div>
      <div className=" mt-1 px-6 py-4 bg-[#f8e8e7] rounded rounded-bl">
        {`Hi, I'm Tran Hoang Thien, i have about 3 years of experience Developer specializing in Front-end web and
        Mobile development. In the process of working, I get figma from design , then break it into
        pieces so that it can be reused next time.`}
      </div>
      <i className="mt-8 text-[#34495e] font-bold">Welcome to visit my CV online!</i>
      <div className="mb-2">
        <span className="text-[#576879] text-[1.15rem] font-bold text-1xl">Front-End:</span>{' '}
        <span className="text-[1.1rem]">I am experienced in&nbsp;</span>
        <span className="text-[#576879] text-[1.15rem] font-bold text-1xl">
          Javascript on ReactJS & Nextjs (NextJS, Redux, Redux-toolkit, Axios, Material UI, ...etc)
        </span>
      </div>
      <div>
        <span className="text-[#576879] text-[1.15rem] font-bold text-1xl">Back-End:</span>
        <span className="text-[1.1rem]"> I am experienced in&nbsp;</span>
        <span className="text-[#576879] text-[1.15rem] font-bold text-1xl">
          Javascript, TypeScript, ExpressJS, MySQL, MongoDB...etc on Node.JS platform
        </span>
        &nbsp;at a basic level.&nbsp;
        <span>
          I usually use it for the pusrpose of doing some personal projects and dummy data.
        </span>
      </div>
      <div className="flex gap-4 text-center mt-5">
        {links.map((link) => (
          <a
            href={link.link}
            key={link.id}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-[#495056] rounded-full cursor-pointer text-[#fff] hover:bg-[#39ada9]"
          >
            {link.img}
          </a>
        ))}
      </div>
      {/* <div className="flex flex-row justify-between items-center border-b-2 pb-2 #000000">
        <span>Summary</span>
        <a href="https://github.com/Thien521999/my-cv" target="_blank" rel="noreferrer">
          View my source code on Github
        </a>
      </div>
      <div className=" mt-1 px-6 py-4 hover:shadow-inner">
        Hi, Im Tran Hoang Thien, a two-year experience Developer specializing in Front-end web and
        Mobile development. In the process of working, I get figma from design , then break it into
        pieces so that it can be reused next time.
      </div> */}
    </div>
  );
};
