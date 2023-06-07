import React from 'react';

export const Summary = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center border-b-2 pb-2 #000000">
        <span>Summary</span>
        <a href="https://github.com/Thien521999/my-cv" target="_blank" rel="noreferrer">
          View my source code on Github
        </a>
      </div>
      <div className=" mt-1 px-6 py-4 hover:shadow-inner">
        Hi, Im Tran Hoang Thien, a two-year experience Developer specializing in Front-end web and
        Mobile development. In the process of working, I get figma from design , then break it into
        pieces so that it can be reused next time.
      </div>
    </div>
  );
};
