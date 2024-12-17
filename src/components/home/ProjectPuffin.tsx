"use client";
import React from "react";
import Image from "next/image";
import PuffinImg from "@/../public/home/ProjectPuffin.webp";
import LearnMoreButton from "./LearnMoreButton";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";
import { motion } from "motion/react";

const ProjectPuffin = () => {
  return (
    <div className="relative mt-[12%] flex w-full flex-col justify-center text-white">
      {/* Content */}
      <div className="left-[5%] z-10 max-w-lg p-8 md:absolute xl:left-[8%]">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mb-[7%] mr-[4%] sm:mr-0 md:mb-[12%] lg:mr-[14%] lg:mt-0"
        >
          <ShiftedLineTitle
            title="Project Puffin"
            width="md:w-[90%]"
            textSize="lg:text-5xl"
            lineMarginShift="ml-[30%]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="ml-[7%]"
        >
          <p className="text-md mb-6 font-jost leading-relaxed sm:text-xl">
            Project Puffin aims at giving those interested in but without a
            background in aeronautics the general know-how of drones. By the end
            of the 2 unit class, students will be able to assemble their own
            drones and understand the parts and basic theory behind them.
          </p>
          <LearnMoreButton color="bg-aviatr-pink-100" link="/projects" />
        </motion.div>
      </div>

      {/* Background Image */}
      <Image
        src={PuffinImg}
        alt="Project Puffin background image"
        className="aspect-video w-full object-cover opacity-50 lg:opacity-60"
      />
    </div>
  );
};

export default ProjectPuffin;
