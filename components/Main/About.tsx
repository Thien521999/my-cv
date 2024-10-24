import React from 'react';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

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
  const year = 4;
  return (
    <div id="about" className="flex flex-col py-8 min-h-screen justify-center">
      <h1 className="flex text-6xl mb-3 uppercase font-bold text-[#343a3f] text-center">
        Trần Hoàng Thiên
      </h1>
      {/* <div className="flex items-center font-medium mb-2 text-1xl text-[#34495e]">
        <span className="mr-2">
          <AccountBoxIcon />
        </span>
        FRONT END DEVELOPER
        <a
          href={`https://tranhoangthien.vercel.app/`}
          className="text-[#39ada9] hover:text-[#f9983a]"
        >
          https://tranhoangthien.vercel.app/
        </a>
      </div> */}
      <div className="flex items-center font-medium mb-2 text-1xl text-[#34495e]">
        <span>
          <span className="mr-2">
            <AddLocationIcon />
          </span>
          111 TRAN THI NOI, WARD 4, DISTRICT 8, HCM CITY
        </span>
      </div>
      <div className="flex items-center font-medium mb-2 text-1xl text-[#34495e]">
        <span className="mr-2">
          <CallIcon />
        </span>
        Phone -&nbsp; 0387878335
      </div>
      <div className="flex items-center font-medium mb-2 text-1xl text-[#34495e]">
        <span className="mr-2">
          <EmailIcon />
        </span>
        Mail -&nbsp;{' '}
        <a href={`mailto:${email}`} className="text-[#39ada9] hover:text-[#f9983a]">
          tranhoangthiendev@gmail.com
        </a>
      </div>
      <div className=" mt-1 px-6 py-4 bg-[#f8e8e7] rounded rounded-bl">
        <div>➤ Hi there, welcome to look at my profile!</div>
        <div>
          {`➤ I am a software engineer with over ${year}+ years of JavaScript experience. I am passionate about learning and adopting new trends to enhance user experience and product quality.`}
        </div>
        <div>
          ➤ For the past 3 years, I have been working remotely on Nextjs projects, becoming highly
          adept at remote work culture. I am proficient with collaboration tools and have honed
          strong self-management and communication skills to ensure effective teamwork and
          productivity in remote environments.
        </div>
      </div>
      <i className="mt-8 text-[#34495e] font-bold">Welcome to visit my CV online!</i>
      <div className="mb-2">
        <span className="text-[#576879] text-[1.15rem] font-bold text-1xl">Front-End:</span>{' '}
        <span className="text-[1.1rem]">I have experience working with&nbsp;</span>
        <span className="text-[#576879] text-[1.15rem] font-bold text-1xl">
          Next.js(Pages Router, App Router, SEO), React( Hook, Redux, Redux-toolkit, React-Query),
          TypeScript, Material UI, Ant Design, TailwindCSS, Axios, Fetch and other technologies.
        </span>
      </div>
      <div>
        <span className="text-[#576879] text-[1.15rem] font-bold text-1xl">Back-End:</span>
        <span className="text-[1.1rem]"> I have experience working with&nbsp;</span>
        <span className="text-[#576879] text-[1.15rem] font-bold text-1xl">
          Node.js, TypeScript, Express.js, MongoDB and other technologies.&nbsp;
        </span>
        <span>
          I usually use it for the pusrpose of doing some personal projects and freelancer.
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
    </div>
  );
};
