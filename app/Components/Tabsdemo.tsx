"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          <p className="text-black">Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          <p className="text-black">Services Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          <p className="text-black">Playground Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          <p className="text-black">Content Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          <p className="text-black">Random Tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem]  md:h-[40rem] [perspective:1000px] relative flex flex-col  px-[120px] w-full items-start justify-start my-40 pb-28  ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto "
    />
  );
};
