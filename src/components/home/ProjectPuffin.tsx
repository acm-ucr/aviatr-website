import React from "react";
import Image from "next/image";
import PuffinImg from "@/../public/home/ProjectPuffin.webp";
import LearnMoreButton from "./LearnMoreButton";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";

const ProjectPuffin = () => {
  return (
    <div className="relative mt-[8%] flex items-center justify-center bg-black text-white lg:h-screen">
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
      <div className="relative z-10 max-w-lg p-8 md:ml-[-35%] xl:ml-[-50%]">
        <div className="mb-[7%] mr-[4%] mt-[6%] sm:mr-0 md:mb-[12%] lg:mr-[14%] lg:mt-0">
          <ShiftedLineTitle
            title="Project Puffin"
            width="md:w-[90%]"
            textSize="lg:text-5xl"
            lineMarginShift="ml-[30%]"
          />
        </div>
        <div className="ml-[7%]">
          <p className="mb-6 font-jost text-xl leading-relaxed">
            Project Puffin aims at giving those interested in but without a
            background in aeronautics the general know-how of drones. By the end
            of the 2 unit class, students will be able to assemble their own
            drones and understand the parts and basic theory behind them.
          </p>
          <LearnMoreButton color="bg-aviatr-pink-100" link="/projects" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPuffin;
