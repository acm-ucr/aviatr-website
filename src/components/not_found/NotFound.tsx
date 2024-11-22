"use client";
import drone from "@/../public/notFound/drone.webp";
import Image from "next/image";
import Link from "next/link";

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
  duration: 0.4,
};

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black p-8 md:flex-row">
      <div className="z-10 mb-8 md:mb-0 md:mr-32">
        <motion.div
          className="sm:mb-[3%]"
          variants={animationX}
          transition={{ ...transition }}
          initial="hidden"
          whileInView="show"
        >
          <Image
            src={drone}
            alt="Drone illustration"
            width={550}
            height={406}
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <motion.div
          className="sm:mb-[3%]"
          variants={animationScale}
          transition={{ ...transition }}
          initial="hidden"
          whileInView="show"
        >
          <div className="font-outline-8 mb-0 font-bungee-hairline text-8xl font-normal leading-tight text-white">
            404
          </div>
        </motion.div>
        <div className="mb-6 w-1/3 border-b-2 border-white p-1"></div>
        <div className="mb-5 font-jost text-3xl font-normal text-white">
          PAGE NOT FOUND
        </div>
        <motion.div
          className="sm:mb-[3%]"
          variants={animationY}
          transition={{ ...transition }}
          initial="hidden"
          whileInView="show"
        >
          <div className="mb-5 max-w-md font-jost text-xl font-normal text-white">
            Sorry, the page you're looking for cannot
            <br />
            be found! Go back or return home.
          </div>
        </motion.div>
        <Link
          href="/"
          className="mt-4 w-56 rounded-full bg-aviatr-blue-300 px-6 py-2 text-xl hover:text-white"
        >
          BACK HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
