import React from 'react';
import Mctexlogo from "@/public/assets/microtexlogo.svg";
import Sarzlogo from "@/public/assets/sarzlogo.svg";
import Ecpaklogo from "@/public/assets/ecpaklogo.svg";
import Ecmdclogo from "@/public/assets/ecmdclogo.svg";
import Rmslogo from "@/public/assets/rmslogo.svg";
import Vesperlogo from "@/public/assets/vesperlogo.svg";
import Bluerangelogo from "@/public/assets/bluerangelogo.svg";
import G1logo from "@/public/assets/g1logo.svg";
import V360logo from "@/public/assets/v360logo.svg";
import Leserenelogo from "@/public/assets/leserenelogo.svg";
import Logoticker from './Logoticker';

const logos = [
    { src: Mctexlogo, alt: "Microtex logo", url: "/" },
    { src: Sarzlogo, alt: "Sarz logo", url: "/" },
    { src: Ecpaklogo, alt: "Ecpak logo", url: "/" },
    { src: Ecmdclogo, alt: "Ecmdc logo", url: "/" },
    { src: Rmslogo, alt: "Rms logo", url: "/" },
    { src: Vesperlogo, alt: "Vesper logo", url: "/" },
    { src: Bluerangelogo, alt: "Bluerange logo", url: "/" },
    { src: G1logo, alt: "G1 logo", url: "/" },
    { src: V360logo, alt: "V360 logo", url: "/" },
    { src: Leserenelogo, alt: "Leserene logo", url: "/" }
];

const LogoCarousel = () => {
  return (
    <div className="md:flex hidden flex-col bg-black mt-24 items-center">
   
        <div className="mb-[92px] md:mb-[50px] md:mt-[50px]">
            <Logoticker logos={logos} />
        </div>    
    </div>
  );
}

export default LogoCarousel;
