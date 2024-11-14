import React from "react";
import Image from "next/image";
import PuffinImg from "@/images/home/ProjectPuffin.webp";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";

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
        <div className="mb-[7%] md:mb-[14%]">
          <ShiftedLineTitle
            title="Project Puffin"
            width="md:w-[90%]"
            textSize="sm:text-5xl"
            lineMarginShift="ml-[30%]"
          />
        </div>

        <p className="text-md mb-6 ml-[8%] font-jost leading-relaxed sm:text-xl">
          Project Puffin aims at giving those interested in but without a
          background in aeronautics the general know-how of drones. By the end
          of the 2 unit class, students will be able to assemble their own
          drones and understand the parts and basic theory behind them.
        </p>
        <a
          href="#"
          className="ml-[8%] mr-2 flex items-center font-metrophobic text-2xl text-white"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default ProjectPuffin;
