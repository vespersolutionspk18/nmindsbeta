import React from 'react'
import Spline from '@splinetool/react-spline'

const Howitworkssection = () => {
  return (
    <div className="flex flex-col lg:px-16 px-10 lg:gap-5 gap-5 mb-20 bg-[#f6f6f6]">
        <div><h2 className="font-semibold text-4xl lg:text-5xl mt-6 lg:mt-20 mb-6 lg:mb-0 tracking-tighter  ">How We <span className="underline font-bold text-blue-700">Work</span></h2>
        <h3 className="text-lg mt-5 text-gray-700">It’s very clear & easy, Here’s a rundown.</h3>
        </div>
        <div id="bento first row" className="flex flex-col lg:flex-row lg:gap-0 gap-5 mt-10 pb-10 lg:pb-0">
            <div id="first column with 1" className="lg:w-1/2 lg:pr-5">
                <div className="bg-white rounded-xl border-gray-200 border-2 lg:h-[270px] flex flex-row">
                    <div id="heading on left" className="flex flex-col px-10 py-14 lg:w-3/5">
                    <div className ="flex flex-row items-center  gap-3">
                    <div className="bg-blue-700 py-3 px-3 text-white rounded-full w-[48px] h-[48px] items-center justify-center text-center text-xl">01</div><h3 className="tracking-tight text-gray-800 lg:text-3xl">Idea to Blueprint</h3>
                    </div>
                    <p className="mt-5 mr-7 text-lg">Developing your ideas into blueprints for digital success. Quick, collaborative sessions to define the roadmap.</p>
                    
                    </div>
                    <div id="image on top right" className="lg:w-2/5 pr-3 py-3 ">
                        <div className="h-full w-full bg-blueprint-image bg-cover rounded-xl"></div>
                    </div>
                </div>
            </div>
            <div id="second column with 2" className="lg:w-1/2 flex flex-row lg:gap-5 gap-5">
            <div className="bg-white rounded-xl border-2 border-gray-200 lg:h-[270px]  flex flex-row w-1/2">
                    <div id="heading on left" className="flex flex-col  ">
                    <div className ="flex flex-row items-center px-6 py-6 gap-3">
                    <div className="bg-blue-700 py-3 px-3 text-white rounded-full  w-[48px] h-[48px] items-center justify-center text-center text-xl">02</div><h3 className="tracking-tight text-gray-800 lg:text-3xl">Prototyping</h3>
                    </div>
                    <p className=" px-6 text-lg">Rapid prototyping to visualize the user journey, ensuring form and function resonate.</p>
                    <div className="bg-proto-image h-full w-auto rounded-xl bg-cover my-2 mx-2"></div>
                    </div>
                    
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl lg:h-[270px]  flex flex-row w-1/2">
                    <div id="heading on left" className="flex flex-col  ">
                    <div className ="flex flex-row items-center px-6 py-6 gap-3">
                    <div className="bg-blue-700 py-3 px-3 text-white rounded-full  w-[48px] h-[48px] items-center justify-center text-center text-xl">03</div><h3 className="tracking-tight text-gray-800 lg:text-3xl">Development</h3>
                    </div>
                    <p className=" px-6 text-lg">Crafting code that matters. Agile dev. for robust, scalable products ready for market success.</p>
                    <div className="bg-coding-image h-full w-auto rounded-xl bg-cover my-2 mx-2"></div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div id="bento second row" className="hidden lg:flex flex-row lg:gap-5 gap-5 lg:pb-10">
        <div className="bg-white border-2 border-gray-200 rounded-xl lg:h-[270px]  flex flex-row w-1/4">
                    <div id="heading on left" className="flex flex-col  ">
                    <div className ="flex flex-row items-center px-6 py-6 gap-3">
                    <div className="bg-blue-700 py-3 px-3 text-white rounded-full  w-[48px] h-[48px] items-center justify-center text-center text-xl">04</div><h3 className="tracking-tight text-gray-800 lg:text-3xl">Testing</h3>
                    </div>
                    <p className=" px-6 text-lg">Detail-driven testing for flawless function. Streamlined QA for a market-ready seal of approval.</p>
                    <div className="bg-debugging-image h-full w-auto rounded-xl bg-cover my-2 mx-2"></div>
                    </div>
                    
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl lg:h-[270px] flex flex-row w-1/2">
                    <div id="heading on left" className="flex flex-col px-10 py-14 lg:w-3/5">
                    <div className ="flex flex-row items-center  gap-3">
                    <div className="bg-blue-700 py-3 px-3 text-white rounded-full w-[48px] h-[48px] items-center justify-center text-center text-xl">05</div><h3 className="tracking-tight text-gray-800 lg:text-3xl">Deployment</h3>
                    </div>
                    <p className="mt-5 mr-7 text-lg">Bringing your project to life with a smooth launch and successful deployment.</p>
                    
                    </div>
                    <div id="image on top right" className="lg:w-2/5 pr-3 py-3 ">
                        <div className="h-full w-full bg-deployment-image  bg-cover rounded-xl"></div>
                    </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl lg:h-[270px]  flex flex-row w-1/4">
                    <div id="heading on left" className="flex flex-col  ">
                    <div className ="flex flex-row items-center px-6 py-6 gap-3">
                    <div className="bg-blue-700 py-3 px-3 text-white rounded-full  w-[48px] h-[48px] items-center justify-center text-center text-xl">06</div><h3 className="tracking-tight text-gray-800 lg:text-3xl">Support</h3>
                    </div>
                    <p className=" px-6 text-lg">Ensuring long-term success with continuous support and performance enhancements.</p>
                    <div className="bg-support-image h-full w-auto rounded-xl bg-cover my-2 mx-2"></div>
                    </div>
                    
                </div>

        </div>
    </div>
  )
}

export default Howitworkssection