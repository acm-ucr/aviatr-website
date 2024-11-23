"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PuffinImg from "@/../public/home/ProjectPuffin.webp";
import LearnMoreButton from "./LearnMoreButton";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";

const ProjectPuffin = () => {
  const [isMobile, setIsMobile] = useState<true | false | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="relative mt-[12%] flex w-full flex-col text-white">
          {/* Content */}
          <div className="left-[5%] z-10 max-w-lg p-8 xl:left-[8%]">
            <div className="mb-[7%] mr-[4%] sm:mr-0 md:mb-[12%] lg:mr-[14%] lg:mt-0">
              <ShiftedLineTitle
                title="Project Puffin"
                width="md:w-[90%]"
                textSize="lg:text-5xl"
                lineMarginShift="ml-[30%]"
              />
            </div>
            <div className="ml-[7%]">
              <p className="text-md mb-6 font-jost leading-relaxed sm:text-xl">
                Project Puffin aims at giving those interested in but without a
                background in aeronautics the general know-how of drones. By the
                end of the 2 unit class, students will be able to assemble their
                own drones and understand the parts and basic theory behind
                them.
              </p>
              <LearnMoreButton color="bg-aviatr-pink-100" link="/projects" />
            </div>
          </div>

          {/* Background Image */}
          <Image
            src={PuffinImg}
            alt="Project Puffin background image"
            className="aspect-video w-full object-cover opacity-50 lg:opacity-60"
          />
        </div>
      ) : (
        <div className="relative mt-[12%] flex w-full items-center text-white">
          {/* Background Image */}
          <Image
            src={PuffinImg}
            alt="Project Puffin background image"
            className="aspect-video w-full object-cover opacity-50 lg:opacity-60"
          />

          {/* Content */}
          <div className="absolute left-[5%] z-10 max-w-lg p-8 xl:left-[8%]">
            <div className="mb-[7%] mr-[4%] sm:mr-0 md:mb-[12%] lg:mr-[14%] lg:mt-0">
              <ShiftedLineTitle
                title="Project Puffin"
                width="md:w-[90%]"
                textSize="lg:text-5xl"
                lineMarginShift="ml-[30%]"
              />
            </div>
            <div className="ml-[7%]">
              <p className="text-md mb-6 font-jost leading-relaxed sm:text-xl">
                Project Puffin aims at giving those interested in but without a
                background in aeronautics the general know-how of drones. By the
                end of the 2 unit class, students will be able to assemble their
                own drones and understand the parts and basic theory behind
                them.
              </p>
              <LearnMoreButton color="bg-aviatr-pink-100" link="/projects" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectPuffin;
