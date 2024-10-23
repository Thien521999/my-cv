import React from 'react';
import Image from 'next/image';
import imgCute from '@public/images/imgCute.svg';

export const End = () => {
  return (
    <div id="the_end" className="flex flex-col min-h-screen justify-center">
      <div className="pb-8 flex text-4xl uppercase font-bold text-[#343a3f]">
        <span>THE END</span>
      </div>
      <div>
        <div className="mb-8">{`Finally, I would like to say "Thank You" for spent time to look at my CV profile.`}</div>
        <div className="flex text-center justify-center">
          <div className="flex text-center justify-center  font-bold font-serif text-2xl max-w-[60%] text-[#343a3f]">
            Be strong as you fight your way to success, the difficulty you face is nothing compared
            to the joy of success.
          </div>
        </div>
        <div className="mt-12 flex text-center justify-center">
          <Image src={imgCute} alt="Picture of the author" width="280" height="280" />
        </div>
      </div>
    </div>
  );
};
