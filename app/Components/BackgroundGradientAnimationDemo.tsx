import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <div className="relative h-screen w-screen">
      <BackgroundGradientAnimation className="absolute inset-0 z-0 items-center justify-center flex" />
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-white font px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="text-white text-5xl ">
          Nexus Minds - <span className="font-semibold">Innovating the future.</span>
        </p>
        <p className=" text-[16px] text-slate-300 mt-10 mx-40 font-light">Forward-thinking product development company specializing in web-based solutions, SaaS, CRMs, mobile apps, and Generative AI. Since our inception, we have strived to remain at the cutting edge of technological advancements, ensuring our clients stay ahead in a rapidly evolving digital landscape.</p>
        
      </div>
    </div>
  );
}