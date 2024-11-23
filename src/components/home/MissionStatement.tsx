"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowImg from "@/../public/home/Arrow.webp";
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
    scale: 0.5,
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

const MissionStatement = () => {
  return (
    <div className="mt-[12%] justify-center bg-black px-[8%] text-white">
      <motion.div
        className="sm:mb-[3%]"
        variants={animationX}
        transition={{ ...transition, delay: 0.2 }}
        initial="hidden"
        whileInView="show"
      >
        <ShiftedLineTitle
          title="What is Aviat'R?"
          width="md:w-[120%]" // default: w-[60%]
          lineMarginShift="ml-[28%]"
          textSize="sm:text-5xl" // default: text-xl
        />
      </motion.div>

      <div className="flex flex-col items-start gap-5 pt-8 md:gap-10 xl:flex-row xl:gap-32">
        {/* Left side */}
        <div className="flex-shrink-0 xl:w-1/4">
          <motion.h2
            className="font-outline-2 sm:font-outline-4 font-metrophobic text-4xl sm:text-5xl"
            variants={animationScale}
            transition={{ ...transition, delay: 0.2 }}
            initial="hidden"
            whileInView="show"
          >
            MISSION<br></br>STATEMENT
          </motion.h2>
        </div>

        {/* Right side */}
        <div className="my-[5%] sm:my-0 xl:w-3/4">
          <motion.p
            className="text-md font-jost leading-relaxed text-white sm:text-xl"
            variants={animationY}
            transition={{ ...transition, delay: 0.2 }}
            initial="hidden"
            whileInView="show"
          >
            At Aviat'R, our mission is to empower students with the knowledge,
            skills, and facilities required to fuel their love for aeronautics.
            We strive to pioneer new Unmanned Aerial Systems that encapsulate
            “tomorrow” and compete for the top among other universities. We are
            dedicated to the craft of UAS and will make our mark on the world.
            Our commitment to excellence, edgenuity, and intelligence drives us
            to continuously innovate and lead the way in new and improved
            systems.
          </motion.p>
        </div>
      </div>

      <div className="mt-[4%] flex items-center justify-end overflow-hidden">
        <Link href="/about">
          <motion.p
            className="text-nowrap font-metrophobic text-sm leading-tight text-white hover:underline sm:mr-2 sm:text-2xl sm:leading-normal"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LEARN MORE
          </motion.p>
        </Link>

        <div>
          <Image
            src={ArrowImg}
            alt="Arrow"
            width={50}
            height={20}
            className="ml-2 h-auto w-[60%] sm:h-7 sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
