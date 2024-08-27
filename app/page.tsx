import Image from "next/image";
import Hero from "./Components/Hero";
import LogoCarousel from "./Components/LogoCarousel";
import Whyussection from "./Components/Whyussection";
import Howitworkssection from "./Components/Howitworkssection";
import { TabsDemo } from "./Components/Tabsdemo";
import { AppleCardsCarouselDemo } from "./Components/Casestudiesshowcase";
import ContactHero from "./Components/ContactHero";
import Footer from "./Components/Footer";
import { StickyScrollRevealDemo } from "./Components/StickyScrollRevealDemo";
import ServicesTabs from "./Components/ServicesTabs";
import Header from "./Components/Header";



export default function Home() {
  return (
    <div className="bg-[#f6f6f6]">
      <Header />
      <Hero />
      <LogoCarousel />
      <Whyussection />
      <Howitworkssection />
      <ServicesTabs />
      <AppleCardsCarouselDemo id="case-studies"/>
    <ContactHero />
      <Footer />
    </div>
  );
}
