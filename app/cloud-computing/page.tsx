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
        
        <h1 className="text-white font-semibold tracking-tight md:text-6xl text-3xl mt-10 font-nobodytalks">Cloud <span className="font-bold stroke-white text-border">Computing</span></h1>
        
        <p className="text-white font-light text-lg tracking-tight text-justify  mt-5 md:pr-20">At Nexus Minds, we specialize in Cloud Computing Services tailored to your needs. Our cloud migration ensures a seamless transition, managing everything from planning to execution with minimal disruption. We handle your critical data and workloads securely and efficiently.</p>
    </div>
    <div className="w-1/2"></div>
  </div>
  
</div>
<div id="bento 2-3" className="flex flex-col my-20 mx-20">
    <div className="my-5 items-center justify-center flex flex-col text-center">
        <div className="rounded-full w-[72px] text-center mx-2 my-1 text-sm text-gray-800 bg-gray-100 border-[1px] border-gray-200 mb-3">Cloud</div>
    <h2 className="text-gray-800 text-5xl font-semibold mb-3 lg:mx-52">Our <span className="underline font-bold text-blue-700">Cloud Computing</span> Consultation Services</h2>
    <p className="md:mx-32 mt-10 text-lg mb-20">We help organizations understand their business needs and achieve successful cloud modernization. We enable agility to better adapt to changing market needs, unlocking their full cloud potential.</p>
    </div>
    <div className="flex flex-row gap-7">
    <div className="lg:w-1/2 hidden lg:block bg-cloudtech-image bg-cover bg-center rounded-xl h-[100vh]"> </div>
    <div className="lg:w-1/2 flex flex-col gap-7">
    <div className="h-1/3 bg-gray-100 rounded-xl flex flex-col px-10 py-5 justify-center"><h3 className="font-medium text-3xl tracking-tight">Assessment</h3>
    <p className="mt-3 text-lg tracking-tight mb-3">Assessing current cloud infrastructure, analyzing technical capabilities, and providing strategic recommendations for future development.</p>
    </div>
    <div className="h-1/3 bg-gray-800 rounded-xl flex flex-col px-10 py-5 justify-center">
    <h3 className="font-medium text-3xl text-yellow-300 tracking-tight">Implementation</h3>
    <p className="mt-3 text-lg text-white tracking-tight mb-3">We implement and deploy the solution, followed by migration and a detailed assessment to ensure everything is functioning correctly.</p>
    </div>
    <div className="h-1/3 bg-gray-100 rounded-xl flex flex-col px-10 py-5 justify-center">
    <h3 className="font-medium text-3xl tracking-tight">Optimization</h3>
    <p className="mt-3 text-lg tracking-tight mb-3">Continuously oversee the infrastructure and implement changes to enhance performance, improve efficiency, and control costs effectively.</p>
    </div>
    </div>
    </div>
    
</div>
        <div id="main content here" className="px-20 py-20 bg-[#f6f6f6] flex flex-col">
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/cloudchrome2.png" width={500} height={500} alt="cloud computing"/>
            </div>
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Unleashing <span className="font-semibold underline">cloud potential</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">As a premier cloud migration service provider, we focus on minimizing organizational risk while enhancing trust in the public cloud throughout the migration process. Leveraging our extensive expertise and resources, we serve as the dependable partner you can rely on for comprehensive guidance and support during your entire modernization project.</p>
            </div>    
            </div>
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Take an edge further <span className="font-semibold underline">with cloud</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">
                We maintain our edge in cloud application development by consistently adapting to the latest industry trends. Our certified teams employ cutting-edge methodologies to create high-performance solutions across all major platforms and devices. The cloud applications we deliver are not only cost-effective but also robust and easy to maintain.</p>
            </div>  
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/cloudchrome3.png" width={500} height={500} alt="cloud computing"/>
            </div>
              
            </div>
            <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
            <Image src="/assets/cloudchrome1.png" width={500} height={500} alt="cloud computing"/>
            </div>
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
                <h3 className="text-gray-800 text-5xl font-medium">Flexible <span className="font-semibold underline">IT Infrastructure</span></h3>
                <p className="text-lg tracking-tight mt-5 text-justify">
                Enterprises are reshaping their business models to become more agile. They require a trusted partner to seamlessly migrate critical workloads and data to a secure and reliable cloud infrastructure, all while ensuring continued integration with their legacy systems. We can do this for you, providing the expertise and support needed for a smooth transition.</p>
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