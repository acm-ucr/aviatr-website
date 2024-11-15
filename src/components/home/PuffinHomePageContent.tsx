import React from "react";
import Image from "next/image";
import PuffinImg from "@/../public/images/home/ProjectPuffin.webp";
import LearnMoreButton from "./LearnMoreButton";

const ProjectPuffin = () => {
  return (
    <div className="relative mt-[8%] flex h-screen items-center justify-center bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={PuffinImg}
          alt="Project Puffin background image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 ml-[-60%] max-w-lg p-8">
        <h1 className="mb-4 font-metrophobic text-6xl font-bold">
          Project Puffin
        </h1>
        <div className="w-1/1.5 mb-6 ml-20 border-b-2 border-white p-1"></div>
        <p className="mb-6 font-jost text-xl leading-relaxed">
          Project Puffin aims at giving those interested in but without a
          background in aeronautics the general know-how of drones. By the end
          of the 2 unit class, students will be able to assemble their own
          drones and understand the parts and basic theory behind them.
        </p>
        <LearnMoreButton color="bg-aviatr-pink-100" link="/projects" />
      </div>
    </div>
  );
};

export default ProjectPuffin;
