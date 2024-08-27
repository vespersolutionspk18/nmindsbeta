"use client";

import React, { useState, useEffect } from 'react';
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { NavigationMenuDemo } from './headMenuNav';

const Header = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const getInTouchClick = () => {
    router.push('/contact');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 z-[2147483647] flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white absolute shadow-md w-[97%] px-3 mt-24 h-[64px] rounded-full flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start">
          <Image src="/assets/nexuslogo.svg" width={250} height={250} alt="Nexus Minds" className="ml-3"/>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <NavigationMenuDemo />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div
            id="button"
            className="group bg-slate-700 h-[44px] flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[188px] hover:bg-blue-700"
            onClick={getInTouchClick}
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
  );
}

export default Header;
