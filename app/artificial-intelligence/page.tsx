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
        <div className="relative min-h-screen">
          <Spline
            className="absolute inset-0  w-full h-full z-0"
            scene="https://prod.spline.design/RjJtl6FxhC4JprVP/scene.splinecode"
          />
          <div className="relative h-full text-white z-10 px-5 py-10 md:px-20 md:py-20 flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10">
              <h1 className="text-white font-semibold tracking-tight text-3xl md:text-6xl mt-10 font-nobodytalks">
                Artificial <span className="font-bold stroke-white text-border">Intelligence</span>
              </h1>
              <p className="text-white font-light text-lg tracking-tight text-justify mt-5 md:pr-20">
                At our core, we focus on efficiency through innovation, and Artificial Intelligence is key to that. Our AI solutions are crafted to elevate your business by automating processes, forecasting trends, and facilitating data-driven decisions to keep you at the forefront. From designing advanced chatbots and recommendation systems to deploying predictive analytics, our AI specialists are dedicated to driving your success.
              </p>
            </div>
            <div className="md:w-1/2"></div>
          </div>
        </div>
        <div id="bento 2-3" className="flex flex-col my-20 mx-20">
          <div className="my-5 items-center justify-center flex flex-col text-center">
            <div className="rounded-full w-[72px] text-center mx-2 my-1 text-sm text-gray-800 bg-gray-100 border-[1px] border-gray-200 mb-3">AI \ ML</div>
            <h2 className="text-gray-800 text-5xl font-semibold mb-3 lg:mx-52">Our <span className="underline font-bold text-blue-700">Artificial Intelligence</span> Services</h2>
            <p className="md:mx-32 mt-10 text-lg mb-20">Unlock the potential of advanced AI solutions to automate, predict, and optimize your operations with precision. Our expert team is dedicated to delivering cutting-edge tools tailored to your needs, ensuring you stay ahead in a competitive landscape.</p>
          </div>
          <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 hidden lg:block bg-artint-image bg-cover bg-center rounded-xl h-[100vh]"> </div>
            <div className="lg:w-1/2 flex flex-col gap-7">
              <div className="h-1/3 bg-gray-100 rounded-xl flex flex-col px-10 py-5 justify-center">
                <h3 className="font-medium text-3xl tracking-tight">Planning & Discovery</h3>
                <p className="mt-3 text-lg tracking-tight mb-3">We identify project goals, conduct thorough needs assessments, and develop a customized AI strategy that aligns with your business objectives and industry requirements.</p>
              </div>
              <div className="h-1/3 bg-gray-800 rounded-xl flex flex-col px-10 py-5 justify-center">
                <h3 className="font-medium text-3xl text-yellow-300 tracking-tight">Development & Integration</h3>
                <p className="mt-3 text-lg text-white tracking-tight mb-3">We design and build AI models tailored to your specific needs, followed by seamless integration into existing systems to enhance operational capabilities and overall performance.</p>
              </div>
              <div className="h-1/3 bg-gray-100 rounded-xl flex flex-col px-10 py-5 justify-center">
                <h3 className="font-medium text-3xl tracking-tight">Monitoring & Optimization</h3>
                <p className="mt-3 text-lg tracking-tight mb-3">The AI solution is launched, ensuring a smooth integration with existing systems. Continuous performance monitoring and iterative refinements are carried out to maintain high levels of accuracy, efficiency, and overall effectiveness.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="main content here" className="px-20 py-20 bg-[#f6f6f6] flex flex-col">
          <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
              <Image src="/assets/aichrome1.png" width={500} height={500} alt="cloud computing"/>
            </div>
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-centerl">
              <h3 className="text-gray-800 text-5xl font-medium">Harness the <span className="font-semibold underline">Power of AI</span></h3>
              <p className="text-lg tracking-tight mt-5 text-justify">Adapting to the latest advancements in AI technology is crucial for staying ahead in today&apos;s competitive market. Our dedicated team uses state-of-the-art techniques to craft solutions that transform your business processes, enhancing efficiency and decision-making. From developing sophisticated algorithms to implementing intelligent systems, our AI solutions are tailored to elevate your operations and drive innovation.</p>
            </div>
          </div>
          <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
              <h3 className="text-gray-800 text-5xl font-medium">Enhance performance with <span className="font-semibold underline">AI Solutions</span></h3>
              <p className="text-lg tracking-tight mt-5 text-justify">Embracing AI means integrating transformative technologies that push boundaries and optimize performance. We specialize in creating advanced AI tools that streamline operations and provide deeper insights into your business. Our focus is on delivering impactful solutions that not only meet current needs but also anticipate future trends, ensuring your business remains at the forefront of technological progress.</p>
            </div>
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
              <Image src="/assets/aichrome2.png" width={500} height={500} alt="cloud computing"/>
            </div>
          </div>
          <div className="flex flex-row gap-7">
            <div className="lg:w-1/2 lg:flex hidden items-center justify-center">
              <Image src="/assets/aichrome3.png" width={500} height={500} alt="cloud computing"/>
            </div>
            <div className="lg:w-1/2 flex my-10 lg:my-0 flex-col  justify-center">
              <h3 className="text-gray-800 text-5xl font-medium">Achieve <span className="font-semibold underline">Business Excellence</span></h3>
              <p className="text-lg tracking-tight mt-5 text-justify">Navigating the complexities of AI can be challenging, but with the right partner, it becomes an opportunity for significant growth. We offer expert guidance in developing and deploying AI solutions that align with your strategic goals. By leveraging innovative technologies and data-driven insights, we help you achieve operational excellence and maintain a competitive edge in an evolving market.</p>
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