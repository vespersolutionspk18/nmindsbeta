import React from 'react'
import Spline from '@splinetool/react-spline'
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 

const Whyussection = () => {
  return (
    <div className="flex flex-col bg-white pb-20 rounded-b-xl">
        <div>
            <h4 className="font-bold text-gray-700  text-xl text-center mt-24">WHY NEXUS?</h4>
            <h4 className="font-semibold text-4xl lg:mx-80 md:text-5xl text-center mt-3 mx-10 leading-none text-gray-800 tracking-tight">We Turn Challenges into Opportunities for <span className="underline text-blue-700 font-bold">your business.</span></h4>
            <p className="mt-14 mx-10 lg:mx-80 text-center text-gray-900 text-lg">Whether you're running a major corporation, managing a multi-location operation, or leading a small business, Nexus Minds uses innovative IT solutions to streamline your processes and cut costs effectively.</p>
        </div>
        <div className="flex flex-col lg:flex-row mt-10 items-center justify-center md:gap-10 gap-10 px-10"> 
        <div className="bg-highway-image bg-cover bg-center flex flex-col w-full h-full items-center rounded-xl overflow-hidden">
                <h5 className="mt-10 mx-10 text-4xl  font-medium tracking-tighter text-white">Bespoke, Tailored, and <span className="text-yellow-300">Customised Solutions</span></h5>
                
                <div className="flex-grow w-full max-w-[400px] h-[300px] my-5">
                
                </div>
                
                
            </div>
            <div className="bg-lights-image bg-cover bg-center flex flex-col w-full h-full items-center rounded-xl overflow-hidden">
                <h5 className="mt-10 mx-10 text-4xl  font-medium tracking-tighter text-white">We’re Pros Who Make Integration and Deployment <span className="text-blue-300">a Breeze</span></h5>
                
                <div className="flex-grow w-full max-w-[400px] h-[300px] my-5">
                
                </div>
                
                
            </div>
            <div className="bg-[#eaf3f9] bg-cover bg-center flex flex-col w-full h-full items-center rounded-xl overflow-hidden">
                <h5 className="mt-10 mx-10 text-4xl  font-medium tracking-tighter text-gray-800">We’re Here for the Long Haul with <span className="text-blue-700">Continuous Support</span></h5>
                
                <div className="flex-grow w-full max-w-[400px] h-[300px] mt-7 mb-3  bg-abstech-image bg-cover rounded-xl">
                
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Whyussection
