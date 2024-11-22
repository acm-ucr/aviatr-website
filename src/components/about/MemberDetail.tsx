"use client";
import React from "react";
import Image from "next/image";
import BMSLeftBorder from "@/../public/about/BMSLeftBorder.webp";

import { motion } from "motion/react";

interface MemberDetailProps {
  hobby: string;
  major: string;
  year: string;
  description: string;
  image: string;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemberDetail: React.FC<MemberDetailProps> = ({
  hobby,
  major,
  year,
  description,
  image,
  setPopup,
}) => {
  // animation for popup
  const animateScaleUp = {
    hidden: { opacity: 0, scale: 0, y: 100, rotateY: 150 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-70">
      <motion.div
        className="text-accent transform-style-preserve-3d relative flex h-[50%] min-h-[400px] w-[70%] rounded-3xl bg-black py-[8%] md:py-[10%] lg:w-[90%] xl:h-[60%] xl:w-[50%] xl:py-[5%]"
        variants={animateScaleUp}
        transition={{ duration: 0.5 }}
        initial="hidden"
        whileInView="show"
        exit={{ scale: 0, y: 600, opacity: 0, transition: { duration: 0.4 } }}
      >
        {/* Close button */}
        <motion.div
          onClick={() => setPopup(false)}
          className="hover:cursor absolute right-[10%] cursor-pointer font-bungee-hairline text-xl text-white text-stroke-white stroke-weight-[2px] md:right-[10%] md:text-2xl md:stroke-weight-[3px] lg:top-[5%]"
          whileHover={{ scale: 1.08 }}
        >
          CLOSE
        </motion.div>

        {/* Left & Right decorative borders */}
        <div className="absolute left-[8%] top-[4%] hidden h-[20%] w-[20%] rotate-180 lg:top-[12%] xl:block">
          <Image src={BMSLeftBorder} alt="Border" />
        </div>
        <div className="absolute bottom-[4%] right-[8%] hidden h-[20%] w-[20%] lg:bottom-[12%] xl:block">
          <Image src={BMSLeftBorder} alt="Border" />
        </div>

        {/* Main content */}
        <div className="mx-auto flex max-h-[100%] min-h-[80%] w-[75%] flex-col gap-2 md:gap-5 lg:gap-10">
          <div className="overflow-y-auto overflow-x-hidden">
            {/* Upper section: Image and Labels */}
            <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center">
              {/* Image section */}

              <Image
                src={image}
                alt="Member Image"
                className="h-auto w-[40%] rounded-2xl md:w-[30%]"
                height={20}
                width={20}
              />

              {/* Details section */}
              <div className="text-md flex w-[67%] flex-col text-wrap text-left font-jost text-white md:ml-4 md:text-xl">
                <p className="mb-1 md:mb-4">
                  <strong className="text-aviatr-blue-500">Hobbies:</strong>{" "}
                  {hobby}
                </p>
                <p className="mb-1 md:mb-4">
                  <strong className="text-aviatr-purple-100">Major:</strong>{" "}
                  {major}
                </p>
                <p className="mb-4 md:mb-4">
                  <strong className="text-aviatr-pink-200">Year:</strong> {year}
                </p>
                <div className="mt-1 flex flex-row items-center md:mt-4">
                  <div className="mb-1 h-2 w-2 rotate-45 transform bg-white sm:mb-3 md:h-3 md:w-3 lg:mb-4"></div>
                  <div className="mb-1 flex-grow border-t-2 border-white sm:mb-3 lg:mb-4"></div>
                  <div className="mb-1 mr-5 h-2 w-2 rotate-45 transform bg-white sm:mb-3 md:h-3 md:w-3 lg:mb-4"></div>
                </div>
              </div>
            </div>

            {/* Lower section: Description */}
            <div className="text-md mt-2 px-3 text-center font-jost text-white md:mt-10 md:text-xl">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MemberDetail;
