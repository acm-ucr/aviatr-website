"use client";
import Image from "next/image";
import Cover from "@/../public/home/homepagecover.webp";
import { motion } from "motion/react";

const animationY = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.7,
};

const HomePageCover = () => {
  return (
    <motion.div
      variants={animationY}
      transition={{ ...transition, delay: 0.2 }}
      initial="hidden"
      whileInView="show"
      className="relative"
    >
      <Image
        src={Cover}
        alt="Background image"
        className="h-auto w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black to-transparent"></div>
    </motion.div>
  );
};

export default HomePageCover;
