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
    className="absolute w-full h-full inset-0 z-0"
    scene="https://prod.spline.design/RjJtl6FxhC4JprVP/scene.splinecode"
  />
  <div className="relative  h-full text-white z-10 px-20 py-20 flex flex-row">
    <div className="md:w-1/2 mb-10">
        
        <h1 className="text-white font-semibold tracking-tight md:text-6xl text-3xl mt-10 font-nobodytalks">DevOps</h1>
        
        <p className="text-white font-light text-lg tracking-tight text-justify  mt-5 md:pr-20">We excel in delivering comprehensive DevOps solutions designed to enhance your development processes. Our approach streamlines everything from continuous integration to deployment, ensuring a smooth and efficient workflow. We focus on optimizing your software development lifecycle, providing reliable and scalable solutions that ensure your operations run seamlessly.</p>
    </div>
    <div className="w-1/2"></div>
  </div>
  
</div>
<div id="bento 2-3" className="flex flex-col my-20 mx-20">
    <div className="my-5 items-center justify-center flex flex-col text-center">
        <div className="rounded-full w-[72px] text-center mx-2 my-1 text-sm text-gray-800 bg-gray-100 border-[1px] border-gray-200 mb-3">DevOps</div>
    <h2 className="text-gray-800 text-5xl font-semibold mb-3 lg:mx-52">Our <span className="underline font-bold text-blue-700">DevOps</span> Services</h2>
    <p className="md:mx-32 mt-10 text-lg mb-20">Nexus Minds assists organizations in optimizing their development and operations practices for greater efficiency and agility. Our DevOps solutions are crafted to enhance your software delivery pipeline, enabling you to adapt swiftly to evolving market demands and achieve seamless integration across your tech stack. By implementing best practices and innovative tools, we help unlock the full potential of your development processes.</p>
    </div>
    <div className="flex flex-row gap-7">
    <div className="lg:w-1/2 hidden lg:block bg-devpp-image bg-cover bg-center rounded-xl h-[100vh]"> </div>
    <div className="lg:w-1/2 flex flex-col gap-7">
    <div className="h-1/3 bg-gray-100 rounded-xl flex flex-col px-10 py-5 justify-center"><h3 className="font-medium text-3xl tracking-tight">Evaluation</h3>
    <p className="mt-3 text-lg tracking-tight mb-3">Review current development processes and tools, offering recommendations to align with best practices.</p>
    </div>
    <div className="h-1/3 bg-gray-800 rounded-xl flex flex-col px-10 py-5 justify-center">
    <h3 className="font-medium text-3xl text-yellow-300 tracking-tight">Integration</h3>
    <p className="mt-3 text-lg text-white tracking-tight mb-3">Deploy and configure DevOps tools, focusing on automation and integration with existing systems.</p>
    </div>
    <div className="h-1/3 bg-gray-100 rounded-xl flex flex-col px-10 py-5 justify-center">
    <h3 className="font-medium text-3xl tracking-tight">Continuous Improvement</h3>
    <p className="mt-3 text-lg tracking-tight mb-3">Monitor and optimize the DevOps environment for enhanced performance and efficiency.</p>
    </div>
    </div>
    </div>
    
</div>
        <div id="main content here" className="px-20 py-20 bg-[#f6f6f6] flex flex-col">
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/devchrome1.png" width={500} height={500} alt="cloud computing"/>
            </div>
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Optimizing <span className="font-semibold underline">Development Workflows</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">At Nexus Minds, our DevOps expertise is dedicated to refining and streamlining your development processes. We help reduce inefficiencies by integrating the latest tools and practices, ensuring that your deployment pipelines are smooth and responsive. Our commitment is to enhance your operational agility, making your workflows more efficient and adaptable.</p>
            </div>    
            </div>
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Driving <span className="font-semibold underline">Excellence in DevOps</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">
                Our approach to DevOps is centered around adopting industry-leading practices to boost your software development lifecycle. By implementing state-of-the-art automation and monitoring solutions, we ensure your systems are reliable and scalable. Our goal is to deliver high-performance solutions that are both resilient and easy to manage.</p>
            </div>  
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/devchrome2.png" width={500} height={500} alt="cloud computing"/>
            </div>
              
            </div>
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/devchrome3.png" width={500} height={500} alt="cloud computing"/>
            </div>
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Transforming <span className="font-semibold underline">IT Operations</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">
                In a rapidly evolving technological landscape, modern IT operations demand flexibility and reliability. Nexus Minds provides the expertise needed to modernize your DevOps practices, integrating new tools with your existing infrastructure for seamless operation. We ensure that your IT environment supports growth and innovation, enhancing your overall efficiency and effectiveness.</p>
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