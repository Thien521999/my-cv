import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTrophy } from '@fortawesome/free-solid-svg-icons';

export const Project = () => {
  return (
    <div id="project" className="flex flex-col p-12 min-h-screen justify-center">
      <div className="pb-8 flex text-4xl uppercase font-bold text-[#343a3f]">
        <span>Project</span>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faTrophy} size="1x" color="gold" />
          <span className="ml-3">Social network</span>&nbsp;-&nbsp;
          <a
            href={`https://social-network-beta-lac.vercel.app`}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-[#39ada9] font-bold hover:text-[#f9983a]"
          >
            https://social-network-beta-lac.vercel.app
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faTrophy} size="1x" color="gold" />
          <span className="ml-3">Shopping card</span>&nbsp;-&nbsp;
          <a
            href={`https://mini-shopping-cart.vercel.app/`}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-[#39ada9] font-bold hover:text-[#f9983a]"
          >
            https://mini-shopping-cart.vercel.app/
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faTrophy} size="1x" color="gold" />
          <span className="ml-3">Overlander</span>&nbsp;-&nbsp;
          <a
            href={`https://overlander-crm-uat.legato-concept.com/`}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-[#39ada9] font-bold hover:text-[#f9983a]"
          >
            https://overlander-crm-uat.legato-concept.com/
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faTrophy} size="1x" color="gold" />
          <span className="ml-3">CSW Hotel - Booking hotel for Hong Kong</span>&nbsp;-&nbsp;
          <a
            href={`https://overlander-crm-uat.legato-concept.com/`}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-[#39ada9] font-bold hover:text-[#f9983a]"
          >
            https://csw-hotel-web-p2-progress.legato-concept.com/
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faTrophy} size="1x" color="gold" />
          <span className="ml-3">Swisscoat - Website selling eyeglasses in Hong Kong</span>
          &nbsp;-&nbsp;
          <a
            href={`https://swisscoat-web-progress.legato.co/`}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-[#39ada9] font-bold hover:text-[#f9983a]"
          >
            https://swisscoat-web-progress.legato.co/
          </a>
        </div>
      </div>
    </div>
  );
};
