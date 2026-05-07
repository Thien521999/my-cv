import React from 'react';

export const Education = () => {
  return (
    <div id="education" className="flex flex-col py-8 min-h-screen justify-center">
      <div className="pb-8 text-4xl uppercase font-bold text-[#343a3f]">
        <span>Education & Certifications</span>
      </div>
      <div className="grid sm:grid-cols-[200px_1fr] gap-y-5 gap-x-6 text-[#34495e]">
        <div className="text-[#576879] font-medium">Oct 2017 – Jan 2021</div>
        <div>
          <div className="font-semibold text-[#343a3f]">University of Science (HCMUS)</div>
          <div>Bachelor of Mathematics and Computer Science</div>
        </div>

        <div className="text-[#576879] font-medium">2017</div>
        <div>
          <div className="font-semibold text-[#343a3f]">TOEIC Certificate</div>
          <div>Score: 600</div>
        </div>
      </div>
    </div>
  );
};
