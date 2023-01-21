import { Avatar } from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '@public/images/avatar.jpeg';
import Image from 'next/image';

const listAddress = [
  {
    id: 1,
    icon: <AddLocationIcon />,
    text: '719 Ta Quang Buu, ward 4, district 8, HCM',
  },
  {
    id: 2,
    icon: <MailIcon />,
    text: 'trhoangthien1999@gmail.com',
  },
  {
    id: 3,
    icon: <PhoneIcon />,
    text: '0387878335',
  },
  {
    id: 4,
    icon: <GitHubIcon />,
    text: 'https://github.com/Thien521999',
  },
  {
    id: 5,
    icon: <LinkedInIcon />,
    text: 'Linked',
  },
  {
    id: 6,
    icon: <DownloadIcon />,
    text: 'Download as PDF',
  },
];

export const Nav = () => {
  return (
    <nav className="lg:sticky col-span-1 lg:h-screen top-0 left-0 bottom-0">
      <div className="lg:flex sm:grid grid-cols-2 lg:flex-col m-4 items-center">
        <div>
          <div className="flex items-center justify-center text-2xl">Tran Hoang Thien</div>
          <div className="flex justify-center items-center">
            <Image src={avatar} alt="Picture of the author" width='240' height='240' />
            {/* <Avatar
              alt="Tran Hoang Thien"
              src="/images/avatar.jpeg"
              sx={{ width: 240, height: 240 }}
            /> */}
          </div>
        </div>

        <ul className="p-4 hover:shadow-lg">
          {listAddress.map((item) => (
            <li
              key={item?.id}
              className="flex flex-row text-sm border-b-2 last:border-b-0 #ffffff py-3 cursor-pointer"
            >
              <span className="mr-2">{item?.icon}</span>
              <span>{item?.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
