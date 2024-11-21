"use client";
import React from "react";
import CenteredLineTitle from "@/components/CenteredLineTitle";
import { motion } from "motion/react";

const animationY = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
  },
};
const transition = {
  duration: 0.8,
};

const WhoWeAre = () => {
  return (
    <div className="mx-auto my-10 flex h-1/4 w-4/5 flex-col md:my-16 lg:w-3/5">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* <CenteredLineTitle
            text="Who We Are"
            color="text-aviatr-pink-200"
            lineWidth="w-[110%]"
          /> */}
        <CenteredLineTitle
          text="Who We Are"
          textColor="text-aviatr-pink-200"
          lineColor="bg-aviatr-pink-200"
          lineWidth="w-[110%]"
        />
      </motion.div>

      <motion.div
        className="text-center font-jost text-sm leading-relaxed text-white sm:text-base md:text-lg lg:text-xl 2xl:text-2xl"
        variants={animationY}
        transition={{ ...transition, delay: 0.2 }}
        whileInView="show"
        initial="hidden"
      >
        {/* AviatR is UCR&apos;s dedicated UAS research club specializing in drone
        manufacturing and autonomous devices. Our mission is to create an
        inclusive and welcoming environment for students interested in avionics,
        providing them with opportunities to engage in hands-on projects and
        collaborate on cutting-edge technology. We aim to empower UCR students
        to participate in the SUAS competition, where they can showcase their
        skills and creativity. Founded to unite individuals who share a passion
        for aviation, AviatR offers a platform for learning, innovation, and
        teamwork, encouraging members to explore various aspects of drone
        technology and development. Whether you&apos;re a beginner or have
        experience in the field, there&apos;s a place for you in our club as we
        work together on exciting drone-related projects. */}
        {/* <div className="text-center font-jost text-xl leading-relaxed text-white"> */}
        {/* <motion.p
          className="text-md text-white sm:text-xl"
          variants={animationY}
          transition={{ ...transition, delay: 0.2 }}
          whileInView="show"
          initial="hidden"
        > */}
        AviatR is UCR&apos;s dedicated UAS research club specializing in drone
        manufacturing and autonomous devices. Our mission is to create an
        inclusive and welcoming environment for students interested in avionics,
        providing them with opportunities to engage in hands-on projects and
        collaborate on cutting-edge technology. We aim to empower UCR students
        to participate in the SUAS competition, where they can showcase their
        skills and creativity. Founded to unite individuals who share a passion
        for aviation, AviatR offers a platform for learning, innovation, and
        teamwork, encouraging members to explore various aspects of drone
        technology and development. Whether you&apos;re a beginner or have
        experience in the field, there&apos;s a place for you in our club as we
        work together on exciting drone-related projects.
        {/* </motion.p> */}
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
