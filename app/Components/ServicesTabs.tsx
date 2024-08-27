"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import RightArrow from "@/public/assets/right.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import { useRouter } from 'next/navigation';

const ServicesTabs = () => {
  const router = useRouter();


  const handleLearnMoreClick = () => {
    router.push('/cloud-computing');
  };

  const webLearnMoreClick = () => {
    router.push('/web-development');
  };
  const aiLearnMoreClick = () => {
    router.push('/artificial-intelligence');
  };
  const devLearnMoreClick = () => {
    router.push('/devops');
  };
  const uiLearnMoreClick = () => {
    router.push('/cloud-computing');
  };
  const mobileLearnMoreClick = () => {
    router.push('/mobile-development');
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="px-16">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="font-semibold text-4xl lg:text-5xl mt-14 lg:mt-20 mb-2 lg:mb-0 tracking-tighter">
              Services <span className="text-blue-700 underline font-bold">We Offer</span>
            </h2>
          </div>
          <div className="mt-14">
            <div></div>
            
          </div>
        </div>
        <h3 className="text-lg mt-5 text-gray-700">
          We leverage AI and machine learning to push your product to set new industry standards.
        </h3>
      </div>
      <div className="bg-white w-full py-[40px] px-16">
        <Tabs defaultValue="cloud" className="">
          <TabsList>
            <TabsTrigger value="cloud">Cloud Computing</TabsTrigger>
            <TabsTrigger value="web-dev">Web Development</TabsTrigger>
            <TabsTrigger value="ai">Artificial Intelligence</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="uiux">UI/UX</TabsTrigger>
            <TabsTrigger value="mobile">Mobile App Development</TabsTrigger>
          </TabsList>
          <TabsContent value="cloud" className=" w-full my-6 bg-white border-2 border-gray-100 px-5 py-5 rounded-xl">
            <div className="flex flex-row">
              <div className="md:w-1/2 w-full py-6 mr-10 pl-5">
                <h3 className="text-3xl ">
                  Reaching New Heights Together—<span className="font-semibold text-blue-700">We Make Cloud Computing Count!</span>
                </h3>
                <p className="md:mt-7 text-gray-800 text-justify text-lg">
                  At Nexus Minds, we believe that the sky’s not the limit—it’s just the beginning! Our Cloud Computing services take your business to new heights, offering seamless, scalable, and secure solutions tailored to your unique needs. Whether you’re looking to migrate your infrastructure, optimize your cloud environment, or implement a hybrid strategy, our team of cloud enthusiasts is ready to make your transition as smooth as a summer breeze.<br></br><br></br>We don’t just throw your data into the cloud and call it a day. We stick around to make sure it’s all rainbows and sunshine up there. With our continuous support and innovative solutions, we ensure your cloud experience is not only effective but also exhilarating. Let’s get your head—and your business—in the clouds, where it belongs!
                </p>
                <div
                  id="button"
                  className="group bg-slate-700 h-[44px] mt-6 flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[188px] hover:bg-blue-700"
                  onClick={handleLearnMoreClick}
                >
                  <div className="mx-3">
                    Learn More 
                  </div>
                  <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                    <ButtonArrow className="h-[24px] w-[24px]" />
                  </div>
                </div>
              </div>
              <div className="w-1/2 items-center justify-center  rounded-xl md:flex hidden ">
                <Image src="/assets/dashcloud.png" alt="Cloud Computing" width={780} height={780} className="rounded-xl" />
              </div>
            </div>  
          </TabsContent>
  <TabsContent value="web-dev" className=" w-full my-6 bg-white border-2 border-gray-100 px-10 py-5 rounded-xl">
    <div className="flex flex-row">
    <div className="md:w-1/2 w-full  py-6 mr-10">
    <h3 className="text-3xl ">From Code to Clicks—<span className="font-semibold text-blue-700">We Build Your Digital Wonderland</span></h3>
    <p className="md:mt-7 text-gray-800 text-justify text-lg">
    Welcome to the Nexus Minds playground, where your ideas turn into fully functional websites that don’t just look pretty—they perform like rock stars! Our Web Development team is all about creating digital experiences that your users will rave about. Whether you need a sleek e-commerce platform, a robust corporate site, or something that defies the ordinary, we’ve got the tools, the talent, and the tenacity to bring it to life.<br></br><br></br>But we don’t stop at just building websites; we craft digital wonders that are responsive, fast, and intuitive. Think of us as your digital architects, constructing a space where every click, swipe, and scroll is a pleasure. And the best part? We’re always here to keep your website fresh and fabulous long after it’s launched.
    </p>
    <div
                  id="button"
                  className="group bg-slate-700 h-[44px] mt-6 flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[188px] hover:bg-blue-700"
                  onClick={webLearnMoreClick}
                >
                  <div className="mx-3">
                    Learn More 
                  </div>
                  <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                    <ButtonArrow className="h-[24px] w-[24px]" />
                  </div>
                </div>
    </div>
    <div className="w-1/2 items-center justify-center md:flex hidden">
    <Image src="/assets/webdev.jpeg" alt="Web Development" width={780} height={780} className="rounded-xl" />
    </div>
    </div>  
  </TabsContent>
  <TabsContent value="ai" className=" w-full my-6 bg-white border-2 border-gray-100 px-10 py-5 rounded-xl">
    <div className="flex flex-row">
    <div className="md:w-1/2 w-full  py-6 mr-10">
    <h3 className="text-3xl ">Smart Solutions for a <span className="font-semibold text-blue-700">Smarter Tomorrow</span></h3>
    <p className="md:mt-7 text-gray-800 text-justify text-lg">
    At Nexus Minds, we’re all about working smarter, not harder—and that’s where Artificial Intelligence comes into play. Our AI services are designed to give your business the cutting edge, automating tasks, predicting trends, and making data-driven decisions that help you stay ahead of the curve. Whether it’s developing intelligent chatbots, creating recommendation engines, or implementing predictive analytics, our AI experts are on the case.<br></br><br></br>We don’t just integrate AI into your business; we make it part of your success story. Our solutions are designed to grow with you, adapting to your needs and helping you achieve more, with less effort. So, let’s get your business brainier, because when it comes to innovation, we’re the brains behind the operation!
    </p>
    <div
                  id="button"
                  className="group bg-slate-700 h-[44px] mt-6 flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[188px] hover:bg-blue-700"
                  onClick={aiLearnMoreClick}
                >
                  <div className="mx-3">
                    Learn More 
                  </div>
                  <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                    <ButtonArrow className="h-[24px] w-[24px]" />
                  </div>
                </div>
    </div>
    <div className="w-1/2 items-center justify-center hidden md:flex">
    <Image src="/assets/aigpt.png" alt="Artificial Intelligence" width={780} height={780} className="rounded-xl" />
    </div>
    </div>  
  </TabsContent>
  <TabsContent value="devops" className=" w-full my-6 bg-white border-2 border-gray-100 px-10 py-5 rounded-xl">
    <div className="flex flex-row">
    <div className="md:w-1/2 w-full py-6 mr-10">
    <h3 className="text-3xl ">Your IT, Turbocharged-<span className="font-semibold text-blue-700">Let’s Kickstart the Transformation!</span></h3>
    <p className="md:mt-7 text-gray-800 text-justify text-lg">
    Why wait for tomorrow when you can deploy today? At Nexus Minds, our DevOps services are all about speed, efficiency, and reliability. We streamline your development process, from coding to deployment, ensuring that your software gets from the drawing board to the user’s hands in record time. Think of us as the pit crew that keeps your IT engine running at full throttle.<br></br><br></br>But it’s not just about going fast—we make sure everything runs like clockwork. Our DevOps strategies include continuous integration, continuous delivery, and automated testing, so you can sleep easy knowing your software is top-notch. Ready to hit the gas? We’re here to give your IT the turbo boost it needs!
    </p>
    <div
                  id="button"
                  className="group bg-slate-700 h-[44px] mt-6 flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[188px] hover:bg-blue-700"
                  onClick={devLearnMoreClick}
                >
                  <div className="mx-3">
                    Learn More 
                  </div>
                  <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                    <ButtonArrow className="h-[24px] w-[24px]" />
                  </div>
                </div>
    </div>
    <div className="w-1/2 items-center justify-center hidden md:flex">
    <Image src="/assets/jira.webp" alt="DevOps" width={780} height={780} className="rounded-xl" />
    </div>
    </div>  
  </TabsContent>
  <TabsContent value="uiux" className=" w-full my-6 bg-white border-2 border-gray-100 px-10 py-5 rounded-xl">
    <div className="flex flex-row">
    <div className="md:w-1/2 w-full  py-6 mr-10">
    <h3 className="text-3xl ">Designs That Delight-<span className="font-semibold text-blue-700">We Craft Experiences, Not Just Interfaces</span></h3>
    <p className="md:mt-7 text-gray-800 text-justify text-lg">
    At Nexus Minds, we don’t just design interfaces—we create experiences that make users smile. Our UI/UX design team is passionate about making digital interactions as intuitive and enjoyable as possible. We believe that a great design isn’t just about aesthetics; it’s about understanding your users and delivering what they need in the most delightful way possible.<br></br><br></br>Whether it’s a mobile app, a website, or a software platform, our designs are all about user-centricity. We dive deep into your users’ journey to craft interfaces that are not only beautiful but also functional and engaging. With us, your digital presence won’t just be seen; it will be loved. So, let’s make some magic happen!
    </p>
    <div
                  id="button"
                  className="group bg-slate-700 h-[44px] mt-6 flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[188px] hover:bg-blue-700"
                  onClick={handleLearnMoreClick}
                >
                  <div className="mx-3">
                    Learn More 
                  </div>
                  <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                    <ButtonArrow className="h-[24px] w-[24px]" />
                  </div>
                </div>
    </div>
    <div className="w-1/2 items-center justify-center hidden md:flex">
    <Image src="/assets/uiux.png" alt="UI/UX" width={780} height={780} className="rounded-xl" />
    </div>
    </div>  
  </TabsContent>
  <TabsContent value="mobile" className=" w-full my-6 bg-white border-2 border-gray-100 px-10 py-5 rounded-xl">
    <div className="flex flex-row">
    <div className="md:w-1/2 w-full  py-6 mr-10">
    <h3 className="text-3xl ">Pocket Power—<span className="font-semibold text-blue-700">Your Business, One Tap Away</span></h3>
    <p className="md:mt-7 text-gray-800 text-justify text-lg">
    In today’s fast-paced world, your business needs to be wherever your customers are—and that’s in their pockets! At Nexus Minds, our Mobile App Development services are all about creating apps that are as powerful as they are portable. We turn your ideas into sleek, user-friendly mobile experiences that keep your customers engaged and coming back for more.<br></br><br></br>From concept to launch, our team is with you every step of the way, crafting apps that are tailored to your business needs and your users’ desires. We ensure that your app not only looks great but also performs flawlessly across all devices. Ready to go mobile? Let’s put your business in the palm of their hands!
    </p>
    <div
                  id="button"
                  className="group bg-slate-700 h-[44px] mt-6 flex-row font-sans text-white text-[16px] py-1 px-1 font-regular rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:transition-width hover:ease-in-out hover:w-[188px] hover:bg-blue-700"
                  onClick={mobileLearnMoreClick}
                >
                  <div className="mx-3">
                    Learn More 
                  </div>
                  <div className="bg-[#E8E9E9] rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
                    <ButtonArrow className="h-[24px] w-[24px]" />
                  </div>
                </div>
    </div>
    <div className="w-1/2 items-center justify-center hidden md:flex">
    <Image src="/assets/mobile.png" alt="Mobile App Development" width={780} height={780} className="rounded-xl" />
    </div>
    </div>  
  </TabsContent>
</Tabs>
        </div>

    </div>
  )
}

export default ServicesTabs