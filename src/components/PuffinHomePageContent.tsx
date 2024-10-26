import React from "react";
import Image from "next/image";

const ProjectPuffin = () => {
  return (
    <div className="relative flex h-screen items-center justify-center bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://media.discordapp.net/attachments/1286541507641212978/1297721981055270993/home_-_project_puffin.png?ex=671ce406&is=671b9286&hm=5705dfff4a1a90f2cd2645274ce166bedb9a505c0ff75fa04474adf621d5e3bc&=&format=webp&quality=lossless&width=1230&height=924"
          alt="Project Puffin background image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg p-8 ml-[-850px]">
        <h1 className="mb-4 font-metrophobic text-5xl font-bold">Project Puffin</h1>
        <div className="mb-6 ml-20 w-1/1.5 border-b-2 border-white p-1"></div>
        <p className="mb-6 text-lg">
          Project Puffin aims at giving those interested in but without a
          background in aeronautics the general know-how of drones. By the end
          of the 2 unit class, students will be able to assemble their own
          drones and understand the parts and basic theory behind them.
        </p>
        <a
          href="#"
          className="flex items-center mr-2 font-metrophobic text-2xl text-white"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default ProjectPuffin;


