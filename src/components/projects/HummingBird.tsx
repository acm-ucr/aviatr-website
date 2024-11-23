"use client";
import Image from "next/image";
import HummingBirdImg from "@/../public/projects/HummingBird.webp";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";

import { motion } from "motion/react";

const animationY = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
  },
};
const animationScale = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};
const animationX = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const transition = {
  duration: 0.7,
};

const HummingBird = () => {
  return (
    <div className="my-[8%] flex w-full flex-col gap-[8%] px-[8%] text-white md:my-[5%] md:items-center lg:flex-row">
      {/* left */}
      <div className="lg:w-2/4">
        <motion.div
          className="mb-[6%] lg:mb-[8%] xl:mb-[3%]"
          variants={animationX}
          transition={{ ...transition, delay: 0.2 }}
          initial="hidden"
          whileInView="show"
        >
          <ShiftedLineTitle
            title="Hummingbird"
            width="md:w-[100%]"
            textSize="sm:text-5xl"
            lineMarginShift="ml-[20%]"
          />
        </motion.div>

        <motion.div
          className="text-md mb-[5%] text-center font-jost leading-relaxed text-white sm:px-6 sm:text-left sm:text-xl lg:mb-0"
          variants={animationY}
          transition={{ ...transition, delay: 0.2 }}
          initial="hidden"
          whileInView="show"
        >
          The Hummingbird project is a research division within the Aviat'R
          enterprise focused on developing drone swarming technology and
          multi-drone networks. Our objective is to create a functional drone
          presentation system capable of performing intricate drone shows. These
          shows can be utilized for fundraising and special events, generating
          revenue to support our team&apos;s ambitious projects. We strive to
          push the boundaries of innovation by designing a sustainable and
          energy-efficient drone swarm, which will enhance our understanding of
          navigation and aerial device networks.
        </motion.div>
      </div>

      {/* right */}

      <motion.div
        className="relative flex bg-blue-700 sm:mb-[3%] lg:w-2/4"
        variants={animationScale}
        transition={{ ...transition, delay: 0.2 }}
        initial="hidden"
        whileInView="show"
      >
        <Image
          src={HummingBirdImg}
          alt="HummingBirdImg"
          className="object-cover sm:my-0"
        />
      </motion.div>
    </div>
  );
};
export default HummingBird;
