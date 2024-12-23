"use client";
import Image from "next/image";
import EagleImg from "@/../public/home/Eagle.webp";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";
import LearnMoreButton from "./LearnMoreButton";
import { motion } from "motion/react";

const animationRight = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const animationLeft = {
  hidden: { opacity: 0, x: 15 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const transition = {
  duration: 0.7,
};

const Eagle = () => {
  return (
    <div className="mt-[18%] flex w-full flex-col items-center justify-between text-white md:mt-[12%] lg:flex-row lg:pl-[8%]">
      {/* left side */}
      <motion.div
        className="mb-7 w-[90%] lg:mb-0 lg:w-2/6"
        variants={animationLeft}
        transition={{ ...transition, delay: 0.2 }}
        initial="hidden"
        whileInView="show"
      >
        <div className="mb-[7%] lg:mb-[12%]">
          <ShiftedLineTitle
            title="Eagle"
            width="w-[200%]"
            textSize="lg:text-5xl"
            lineMarginShift="ml-[50%]"
          />
        </div>
        <div className="text-md ml-[4%] flex flex-col gap-6 px-4 font-jost leading-relaxed sm:text-xl">
          <p>
            Eagle is a select team that competes with universities in the nation
            and make Aviat&apos;R&apos;s name known. It participates in SUAS, a
            competition aimed at challenging students to make their own unmanned
            aerial systems to complete a specific task. This sparks innovation
            from competition and poses as one of the largest motivations for
            improvement in the student world.
          </p>
          <LearnMoreButton color="bg-aviatr-blue-300" link="/projects#eagle" />
        </div>
      </motion.div>

      {/* right side */}
      <motion.div
        className="clip-slope relative flex overflow-hidden lg:h-[800px]"
        variants={animationRight}
        transition={{ ...transition, delay: 0.2 }}
        initial="hidden"
        whileInView="show"
      >
        <Image
          src={EagleImg}
          alt="Eagle"
          width={914}
          height={800}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Eagle;
