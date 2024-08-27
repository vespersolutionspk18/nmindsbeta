import React from 'react'
import LogoCarousel from '../Components/LogoCarousel'
import Spline from '@splinetool/react-spline'
import { Badge } from '@/components/ui/badge'
import { AppleCardsCarouselDemo } from '../Components/Casestudiesshowcase'
import ContactHero from '../Components/ContactHero'
import Footer from '../Components/Footer'
import Image from 'next/image'
import Header from '../Components/Header'

const page = () => {
  return (
    <div id="services template">
      <Header />
        <div className="flex flex-col w-full">
        <div className="relative  ">
  <Spline
    className="absolute w-full h-full  inset-0 z-0"
    scene="https://prod.spline.design/RjJtl6FxhC4JprVP/scene.splinecode"
  />
  <div className="relative  h-full text-white z-10 px-20 py-20 flex flex-row">
    <div className="md:w-1/2 mb-10">
        
        <h1 className="text-white font-semibold tracking-tight md:text-6xl text-3xl mt-10 font-nobodytalks">Mobile <span className="font-bold stroke-white text-border">Development</span></h1>
        
        <p className="text-white font-light text-lg tracking-tight text-justify  mt-5 md:pr-20">Our Mobile Development services are designed to bring your app ideas to life with precision and efficiency. We manage the entire development process, from initial concept and design to deployment and ongoing support. Our team ensures that your mobile applications are user-friendly, high-performing, and aligned with your business objectives, all while maintaining top-notch security and functionality.</p>
    </div>
    <div className="w-1/2"></div>
  </div>
  
</div>
<div id="bento 2-3" className="flex flex-col my-20 mx-20">
    <div className="my-5 items-center justify-center flex flex-col text-center">
        <div className="rounded-full w-[72px] text-center mx-2 my-1 text-sm text-gray-800 bg-gray-100 border-[1px] border-gray-200 mb-3">Mobile</div>
    <h2 className="text-gray-800 text-5xl font-semibold mb-3 lg:mx-52">Our <span className="underline font-bold text-blue-700">Mobile Development</span> Services</h2>
    <p className="md:mx-32 mt-10 text-lg mb-20">We craft bespoke mobile applications tailored to your unique business needs, delivering exceptional user experiences across all platforms. Our team ensures each app is not only visually stunning but also robust and optimized for peak performance.</p>
    </div>
    <div className="flex flex-row gap-7">
    <div className="lg:w-1/2 hidden lg:block bg-cloudtech-image bg-cover bg-center rounded-xl h-[100vh]"> </div>
    <div className="lg:w-1/2 flex flex-col gap-7">
    <div className="h-1/3 bg-gray-100 rounded-xl flex flex-col px-10 py-5 justify-center"><h3 className="font-medium text-3xl tracking-tight">Discovery and Planning</h3>
    <p className="mt-3 text-lg tracking-tight mb-3">Identify project goals, target audience, and key features. Conduct market research and define technical requirements to create a comprehensive roadmap for the app development process.</p>
    </div>
    <div className="h-1/3 bg-gray-800 rounded-xl flex flex-col px-10 py-5 justify-center">
    <h3 className="font-medium text-3xl text-yellow-300 tracking-tight">Design and Development</h3>
    <p className="mt-3 text-lg text-white tracking-tight mb-3">Design user-friendly interfaces and develop the app using agile methodologies. Focus on creating a seamless user experience with iterative testing and feedback to refine functionality and design.</p>
    </div>
    <div className="h-1/3 bg-gray-100 rounded-xl flex flex-col px-10 py-5 justify-center">
    <h3 className="font-medium text-3xl tracking-tight">Deployment and Maintenance</h3>
    <p className="mt-3 text-lg tracking-tight mb-3">Launch the app on relevant platforms and monitor its performance. Provide ongoing support and updates to ensure optimal performance, address any issues, and incorporate user feedback for continuous improvement.</p>
    </div>
    </div>
    </div>
    
</div>
        <div id="main content here" className="px-20 py-20 bg-[#f6f6f6] flex flex-col">
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/mchrome2.png" width={500} height={500} alt="cloud computing"/>
            </div>
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Elevating <span className="font-semibold underline">Mobile Experiences</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">At Nexus Minds, we excel in creating mobile applications that drive user engagement and satisfaction. Our expertise in mobile development ensures that every app we build is tailored to meet your specific business needs and deliver an exceptional user experience. We blend innovative design with advanced technology to ensure your app performs flawlessly across all devices and platforms.</p>
            </div>    
            </div>
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Driving Innovation in <span className="font-semibold underline">Mobile Development</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">
                We stay ahead in mobile app development by continuously adopting the latest industry trends and technologies. Our dedicated team leverages cutting-edge tools and agile methodologies to craft high-performance apps that are both functional and visually compelling. Each app is developed with a focus on seamless usability and long-term value, ensuring your mobile presence remains competitive and effective.</p>
            </div>  
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/mchrome3.png" width={500} height={500} alt="cloud computing"/>
            </div>
              
            </div>
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/mchrome1.png" width={500} height={500} alt="cloud computing"/>
            </div>
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Seamless <span className="font-semibold underline">Mobile Integration</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">
                Businesses today demand flexible and efficient mobile solutions that integrate smoothly with their existing systems. We provide comprehensive support throughout the mobile development lifecycle, from initial concept to final deployment. Our goal is to ensure a smooth transition and ongoing performance, helping you maintain a cohesive and dynamic mobile strategy.</p>
            </div>    
            </div>     
        </div>
        <AppleCardsCarouselDemo />
        <ContactHero />
        <Footer />    
        </div>
    </div>
  )
}

export default page