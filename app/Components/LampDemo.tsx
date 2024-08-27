"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Innovating for <br /> a better tommorrow
        <p className="font-light text-lg mx-40 tracking-normal pt-10">We’re a dynamic organization focused on creating innovative web solutions, SaaS products, CRM systems, mobile apps, and Generative AI technologies. Our passion for staying ahead of tech trends helps us empower our clients to excel and adapt in the ever-changing digital landscape.</p>
      </motion.h1>
    </LampContainer>
  );
}
