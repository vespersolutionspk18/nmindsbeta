import React from 'react';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import RightArrow from "@/public/assets/right.svg";
import ButtonArrow from "@/public/assets/buttonarrow.svg";

const Hero = () => {
    return (
      <div className="relative flex flex-col items-left min-h-screen lg:h-[700px] overflow-visible lg:flex-row px-10 lg:px-0 pb-10 lg:pb-0 bg-white">
        <Spline
          scene="https://prod.spline.design/Ejt57D6Dh4X9i4UV/scene.splinecode"
          className="absolute inset-0 w-full h-full z-0 overflow-visible md:scale-[1.3] "
        />
      </div>
    );
};

export default Hero;