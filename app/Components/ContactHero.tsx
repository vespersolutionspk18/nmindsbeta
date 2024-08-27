"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import ButtonArrowwhite from "@/public/assets/barrowwhite.svg";
import Spline from '@splinetool/react-spline';

const ContactHero = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/contact');
  };

  return (
    <div className="bg-white w-full">
      <div className="flex items-center justify-center">
        <div className="relative bg-white rounded-3xl mx-5 my-5 md:mx-20 md:my-20 h-full w-full text-gray-800 flex flex-col justify-center items-center overflow-clip">
          <Spline
            scene="https://prod.spline.design/U7tM85A8fTvRfEnm/scene.splinecode"
            className="absolute inset-0 z-0 "
          />
          <div className="relative z-10">
            <h3 className="lg:text-5xl mx-5 md:mx-0 text-3xl font-semibold text-center text-black mt-20 mb-5">
              Get in touch today for a quick<br />
              <span className="text-purple-700">estimate and start your project with us!</span>
            </h3>
            <p className="text-lg text-slate-800 ld:mx-40 mx-20 text-center">
              At Nexus Minds, we’re not just about making a profit. We’re passionate about helping businesses thrive and meeting their technology needs with creative, innovative solutions.
            </p>
            <div className="mb-20 flex items-center justify-center mt-10">
              <div
                id="button"
                className="group bg-slate-700 h-[44px] mt-3 flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[188px] hover:bg-blue-700"
                onClick={handleButtonClick}
              >
                <div className="mx-3">
                  Get in Touch
                </div>
                <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                  <ButtonArrow className="h-[24px] w-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;