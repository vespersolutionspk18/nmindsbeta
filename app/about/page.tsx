import React from 'react'
import { BackgroundGradientAnimation } from '../Components/ui/background-gradient-animation'
import { BackgroundGradientAnimationDemo } from '../Components/BackgroundGradientAnimationDemo'
import { LampDemo } from '../Components/LampDemo'
import { TimelineDemo } from '../Components/TimelineDemo'
import { AppleCardsCarouselDemo } from '../Components/Casestudiesshowcase'
import ContactHero from '../Components/ContactHero'
import Footer from '../Components/Footer'
import AboutPhilo from '../Components/AboutPhilo'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { ContactForm } from '../Components/ContactForm'
import Header from '../Components/Header'
  

const page = () => {
  return (
    <div>
      <Header />
        <LampDemo />
        <AboutPhilo />
        <TimelineDemo />
        <AppleCardsCarouselDemo />
        <ContactHero />
        <Footer />
        
    </div>
  )
}

export default page