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
        
        <h1 className="text-white font-semibold tracking-tight md:text-6xl text-3xl mt-10 font-nobodytalks">Web <span className="font-bold stroke-white text-border">Development</span></h1>
        
        <p className="text-white font-light text-lg tracking-tight text-justify  mt-5 md:pr-20">We provide comprehensive Web Development Services, encompassing everything from dynamic websites to advanced web applications. Our focus is on delivering user-friendly, visually appealing sites and robust apps that ensure seamless performance and align with your specific needs. Utilizing the latest technologies and frameworks, we build scalable solutions tailored to your objectives. From initial concept through deployment and support, our end-to-end services are designed to enhance your digital strategy and drive growth.</p>
    </div>
    <div className="w-1/2"></div>
  </div>
  
</div>
<div id="bento 2-3" className="flex flex-col my-20 mx-20">
    <div className="my-5 items-center justify-center flex flex-col text-center">
        <div className="rounded-full w-[72px] text-center mx-2 my-1 text-sm text-gray-800 bg-gray-100 border-[1px] border-gray-200 mb-3">Web</div>
    <h2 className="text-gray-800 text-5xl font-semibold mb-3 lg:mx-52">Our <span className="underline font-bold text-blue-700">Web Development</span> Services</h2>
    <p className="md:mx-32 mt-10 text-lg mb-20">Understanding business requirements and delivering effective web solutions drives digital transformation. Tailored web development services enhance agility, allowing businesses to swiftly adapt to changing market conditions and fully capitalize on their online potential..</p>
    </div>
    <div className="flex flex-row gap-7">
    <div className="lg:w-1/2 hidden lg:block bg-coding-image bg-cover bg-center rounded-xl h-[100vh]"> </div>
    <div className="lg:w-1/2 flex flex-col gap-7">
    <div className="h-1/3 bg-gray-100 rounded-xl flex flex-col px-10 py-5 justify-center"><h3 className="font-medium text-3xl tracking-tight">Planning</h3>
    <p className="mt-3 text-lg tracking-tight mb-3">Evaluating your current web presence, understanding your specific needs, and providing strategic recommendations for developing an effective web solution tailored to your objectives.</p>
    </div>
    <div className="h-1/3 bg-gray-800 rounded-xl flex flex-col px-10 py-5 justify-center">
    <h3 className="font-medium text-3xl text-yellow-300 tracking-tight">Development</h3>
    <p className="mt-3 text-lg text-white tracking-tight mb-3">We design and build your website or web application, followed by thorough testing and deployment to ensure all features work seamlessly and meet your business requirements.</p>
    </div>
    <div className="h-1/3 bg-gray-100 rounded-xl flex flex-col px-10 py-5 justify-center">
    <h3 className="font-medium text-3xl tracking-tight">Maintenance</h3>
    <p className="mt-3 text-lg tracking-tight mb-3">Ongoing support and optimization to enhance performance, ensure security, and adapt to evolving technology and user needs, keeping your web presence at peak efficiency.</p>
    </div>
    </div>
    </div>
    
</div>
        <div id="main content here" className="px-20 py-20 bg-[#f6f6f6] flex flex-col">
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2    items-center justify-center lg:block hidden">
            <Image src="/assets/webchrome1.png" width={500} height={500} alt="cloud computing"/>
            </div>
            <div className="lg:w-1/2 my-10 lg:my-0 justify-center flex flex-col">
                <h3 className="text-gray-800 text-5xl font-medium">Transforming <span className="font-semibold underline">Digital Experiences</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">At the forefront of web development, our goal is to reduce project uncertainties while building a strong, effective online presence for your business. Utilizing our advanced skills and comprehensive tools, we ensure you receive the support and expertise needed for a successful digital evolution. Rely on us to navigate every phase of your web development journey with precision and excellence.</p>
            </div>    
            </div>
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Elevate Your <span className="font-semibold underline">Digital Presence</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">
                Staying ahead in web development requires constant innovation and adaptation. Our expert teams use the latest techniques and technologies to build high-performance websites and web applications that excel across all platforms and devices. The solutions we provide are designed to be cost-effective, resilient, and simple to maintain, ensuring your digital presence remains competitive and impactful.</p>
            </div>  
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/webchrome2.png" width={500} height={500} alt="cloud computing"/>
            </div>
              
            </div>
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/webchrome3.png" width={500} height={500} alt="cloud computing"/>
            </div>
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Adaptive <span className="font-semibold underline">Web Solutions</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">
                Businesses are evolving to meet dynamic market demands, requiring a reliable partner to develop and maintain versatile web solutions. Our expertise ensures a smooth transition as we build and integrate sophisticated websites and web applications, all while maintaining alignment with existing systems. We offer the support needed to deliver high-performing, adaptable web solutions tailored to your unique needs.</p>
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