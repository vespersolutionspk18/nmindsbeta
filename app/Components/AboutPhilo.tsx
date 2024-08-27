import React from 'react'
import Spline from '@splinetool/react-spline'
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 

const AboutPhilo = () => {
  return (
    <div className="flex flex-col bg-[#f6f6f6] pb-20 rounded-b-xl">
        <div>
          
            <h4 className="font-semibold text-4xl lg:mx-80 md:text-5xl text-center mt-3 md:mt-24 mx-10 leading-none text-gray-800 tracking-tight">The <span className="underline text-blue-700 font-bold">Nexus way</span></h4>
            <p className="mt-10 mx-10 lg:mx-80 text-center text-gray-900 text-xl md:mb-10">As a top IT company, <b>we&apos;re uniquely positioned to partner with the world’s largest businesses</b> in their transformation journeys.</p>
        </div>
        <div className="flex flex-col lg:flex-row mt-10 items-center justify-center md:gap-10 gap-10 px-10"> 
        <div className="bg-darkcity-image bg-cover bg-center flex flex-col w-full h-full items-center rounded-xl overflow-hidden">
                <h5 className="mt-10 mx-10 text-4xl  font-medium tracking-tighter text-white">We leverage customer-centric and cutting-edge talent and technology for <span className="text-yellow-300">Higher Business Efficiency</span></h5>
                
                <div className="flex-grow w-full max-w-[400px] h-[200px] my-5">
                
                </div>
                
                
            </div>
            <div className="bg-darklights-image bg-cover bg-center flex flex-col w-full h-full items-center rounded-xl overflow-hidden">
                <h5 className="mt-10 mx-10 text-4xl  font-medium tracking-tighter text-white">We reimagine processes and systems by offering holistic solutions for <span className="text-blue-300">superior enterprise value.</span></h5>
                
                <div className="flex-grow w-full max-w-[400px] h-[200px] my-5">
                
                </div>
                
                
            </div>
            <div className="bg-[#eaf3f9] bg-cover bg-center flex flex-col w-full h-full items-center rounded-xl overflow-hidden">
                <h5 className="mt-10 mx-10 text-4xl  font-medium tracking-tighter text-gray-800">We enable future-ready enterprises with <span className="text-blue-700">long-term growth in a state of perpetual reinvention.</span></h5>
                
                <div className="flex-grow w-full max-w-[400px] h-[240px] mt-7 mb-3  bg-yellowwall-image bg-cover rounded-xl">
                
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default AboutPhilo
