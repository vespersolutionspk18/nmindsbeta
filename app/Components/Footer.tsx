import React from 'react'
import Image from 'next/image'
import Nexuslogo from "@/public/assets/nexuslogo.svg"; 
import { Input } from "@/components/ui/input";
const Footer = () => {
  return (
    <div className="flex flex-col">
       <div id="logo" className=" flex items-center justify-center mt-20 text-center">
        <Nexuslogo className="h-[64px]  items-center justify-center" />
       </div>
       <div id="links here" className="flex flex-row items-center justify-center mt-10 text-center gap-16 font-light text-2xl">
        <p>Home</p>
        <p>Services</p>
        <p>About</p>
        <p>Case Studies</p>
        <p>Contact</p>
       </div>
       <div id="copyright and subscribe" className="items-center justify-between mx-[120px] mt-10 mb-10 text-center flex flex-row">
        
        <div>Copyright 2024. All rights reserved</div>
        <div>
        <Input type="email" placeholder="Email" />

        </div>
       </div>
    </div>
  )
}

export default Footer