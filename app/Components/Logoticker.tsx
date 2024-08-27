import Link from 'next/link';
import React from 'react';

const Logoticker = ({ logos }: { logos: { src: React.ElementType, alt: string, url: string }[] }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="overflow-hidden whitespace-nowrap flex items-center relative z-10">
        <div className="flex gap-[72px] animate-marquee">
          {logos.map((logo, index) => {
            const LogoComponent = logo.src;
            return (
              <Link key={index} href={logo.url} className="flex-shrink-0 flex items-center justify-center">
                <LogoComponent alt={logo.alt} className="h-[30px] w-auto" />
              </Link>
            );
          })}
          {/* Duplicate logos for a seamless effect */}
          {logos.map((logo, index) => {
            const LogoComponent = logo.src;
            return (
              <Link key={`duplicate-${index}`} href={logo.url} className="flex-shrink-0 flex items-center justify-center">
                <LogoComponent alt={logo.alt} className="h-[30px] w-auto" />
              </Link>
            );
          })}
        </div>
      </div>
      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none flex z-20">
        {/* Left vignette */}
        <div className="w-[40%] bg-gradient-to-r from-black to-transparent"></div>
        <div className="flex-grow"></div>
        {/* Right vignette */}
        <div className="w-[40%] bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
}

export default Logoticker;