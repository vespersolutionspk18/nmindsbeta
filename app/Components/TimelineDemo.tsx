import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Our Mission",
      content: (
        <div>
          <p className="text-neutral-800 text-justify dark:text-neutral-200 text-lg md:text-lg  tracking-tight font-normal md:font-regular mb-8">
          At Nexus, our mission is to bring visionary ideas to life through innovative and impactful digital solutions that drive real-world success. We harness the power of cutting-edge technology and blend it with creative insights to deliver solutions that empower businesses and set them up for lasting growth. Our goal is to be at the forefront of technological advancements, helping our clients stay ahead in their industries and shape the future of their markets. We&apos;re dedicated to creating not only transformative tools and systems but also engaging and compelling content that makes our mission statement a memorable and essential part of your experience on our website. By focusing on both innovation and communication, we aim to inspire and resonate with our audience, ensuring that our mission statement reflects the true essence of our commitment to excellence.
          </p>
          
        </div>
      ),
    },
    {
      title: "Our Vision",
      content: (
        <div>
          <p className="text-neutral-800 text-justify dark:text-neutral-200 text-lg  tracking-tight font-normal md:font-regular mb-8">
          Our vision is to be a catalyst for innovation, driving the evolution of digital solutions that redefine industry standards and transform the way businesses operate. We aspire to lead with creativity and technology, envisioning a future where our solutions are at the heart of groundbreaking advancements across various sectors. Our aim is to inspire and empower businesses to embrace change, leverage new opportunities, and achieve their fullest potential. We see ourselves as partners in our clients&apos;success, dedicated to fostering growth and innovation through every project we undertake. By combining our forward-thinking approach with a deep understanding of emerging trends, we strive to shape a future where technology and creativity intersect to deliver exceptional results and drive industry-leading progress.          </p>
          
        </div>
      ),
    },
    {
      title: "Our Values",
      content: (
        <div>
        <p className="text-neutral-800 text-justify dark:text-neutral-200 text-lg  tracking-tight font-normal md:font-regular mb-8">
        At Nexus, our values are the cornerstone of everything we do, guiding our approach to innovation, collaboration, and client success. We are committed to excellence, constantly pushing the boundaries of technology and creativity to deliver superior solutions that exceed expectations. Integrity is at the heart of our operations; we build trust through transparency, honesty, and a steadfast dedication to ethical practices. Collaboration is key to our success; we believe in working closely with our clients and partners to foster strong, productive relationships that drive mutual growth. Innovation is our passion, as we continuously explore new ideas and technologies to stay ahead in a rapidly evolving digital landscape. Finally, we are driven by a commitment to making a positive impact, both through the solutions we provide and the way we conduct ourselves in all our business endeavors. These values shape our culture and ensure that we remain focused on delivering exceptional results and creating lasting value for our clients and community.         </p>
        
      </div>
      ),
    },
  ];
  return (
    <div className="w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
