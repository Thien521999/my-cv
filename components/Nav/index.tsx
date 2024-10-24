// import { Avatar } from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar2 from '@public/images/avatar2.jpg';
// import imgPeople from '@public/images/imgPeople.jpeg';
import imgPeople from '@public/images/imgPeople.jpg';
// import avatar from '@public/images/.jpg';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

// const listAddress = [
//   {
//     id: 1,
//     icon: <AddLocationIcon />,
//     text: '719 Ta Quang Buu, ward 4, district 8, HCM',
//     link: '',
//   },
//   {
//     id: 2,
//     icon: <MailIcon />,
//     text: 'trhoangthien1999@gmail.com',
//     link: '',
//   },
//   {
//     id: 3,
//     icon: <PhoneIcon />,
//     text: '0387878335',
//     link: '',
//   },
//   {
//     id: 4,
//     icon: <GitHubIcon />,
//     text: 'https://github.com/Thien521999',
//     link: '',
//   },
//   {
//     id: 5,
//     icon: <LinkedInIcon />,
//     text: 'Linked',
//     link: '',
//   },
//   {
//     id: 6,
//     icon: <DownloadIcon />,
//     text: 'Download as PDF',
//     link: '/CV_TranHoangThien.pdf',
//   },
// ];

const infos = [
  {
    id: 1,
    icon: <AddLocationIcon />,
    text: 'ABOUT ME',
    link: 'about',
  },
  {
    id: 2,
    icon: <MailIcon />,
    text: 'EXPERIENCE',
    link: 'experience',
  },
  {
    id: 3,
    icon: <GitHubIcon />,
    text: 'SKILL',
    link: 'skill',
  },
  {
    id: 4,
    icon: <PhoneIcon />,
    text: 'EDUCATION',
    link: 'education',
  },
  // {
  //   id: 5,
  //   icon: <LinkedInIcon />,
  //   text: 'PROJECT',
  //   link: 'project',
  // },
  // {
  //   id: 6,
  //   icon: <DownloadIcon />,
  //   text: 'INTERESTS',
  //   link: 'interests',
  // },
  {
    id: 5,
    icon: <DownloadIcon />,
    text: 'THE END',
    link: 'the_end',
  },
  // {
  //   id: 6,
  //   icon: <DownloadIcon />,
  //   text: 'DOWNLOAD PDF',
  //   link: '',
  // },
];

export const Nav = () => {
  return (
    <nav className="lg:sticky col-span-1 lg:h-screen top-0 left-0 bottom-0 bg-[#39ada9] sm:block hidden overflow-y-scroll">
      <div className="lg:flex sm:grid grid-cols-2 lg:flex-col m-4 items-center justify-center h-full">
        <div>
          {/* <div className="flex items-center justify-center text-3xl text-white mb-2">
            Tran Hoang Thien
          </div> */}
          <div className="flex justify-center items-center rounded-full">
            <Image
              src={avatar2}
              alt="Picture of the author"
              width="240"
              height="240"
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>

        <ul className="p-4">
          {infos.map((item) => (
            <ScrollLink
              key={item?.id}
              to={item?.link}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className="flex flex-row text-lg border-b-2 last:border-b-0 text-[#a3d6d3] py-3 cursor-pointer items-center justify-center font-bold hover:text-white">
                {/* <span className="mr-2">{item?.icon}</span> */}
                <span>{item?.text}</span>
              </li>
            </ScrollLink>
          ))}
          <li className="flex flex-row text-lg border-b-2 last:border-b-0 py-3 cursor-pointer items-center justify-center font-bold">
            <span>DOWNLOAD PDF</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};
