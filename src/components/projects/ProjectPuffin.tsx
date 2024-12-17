"use client";
import React from "react";
import Image from "next/image";
import ProjectPuffin1 from "@/../public/projects/project-puffin-1.webp";
import ProjectPuffin2 from "@/../public/projects/project-puffin-2.webp";
import ProjectPuffin3 from "@/../public/projects/project-puffin-3.webp";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";
import { motion } from "motion/react";

const animateTitle = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

const animateText = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

// stagger
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const animateLeftMobileSection = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2 },
  },
};

const animateRightMobileSection = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2 },
  },
};

const ProjectPuffin = () => {
  return (
    <div
      className="mx-[8%] my-[5%] overflow-hidden font-jost text-white"
      id="projectpuffin"
    >
      <motion.div
        className="mb-[8%] md:mb-[3%]"
        variants={animateTitle}
        transition={{ duration: 0.7, delay: 0.2 }}
        initial="hidden"
        whileInView="show"
      >
        <ShiftedLineTitle
          title="Project Puffin"
          width="md:w-[90%]"
          textSize="sm:text-5xl"
          lineMarginShift="ml-[30%]"
        />
      </motion.div>

      <div className="text-md text-center sm:hidden sm:text-xl">
        <motion.div
          variants={animateLeftMobileSection}
          initial="hidden"
          whileInView="show"
        >
          <Image
            src={ProjectPuffin1}
            alt="Aviatr member explaining concepts on a whiteboard to other members in a classroom"
            className="mb-4"
          />
          <p className="mx-[4%] mb-10 font-jost leading-relaxed">
            A common challenge in many engineering organizations is the lack of
            effective mentorship. Novice members often find themselves assigned
            to complex projects requiring advanced knowledge, which can be
            overwhelming. To address this issue, the Puffin division offers a
            program designed for newer members to "get their feet wet" and grasp
            the fundamentals of aeronautical engineering and drone design.
          </p>
        </motion.div>
        <motion.div
          variants={animateRightMobileSection}
          initial="hidden"
          whileInView="show"
        >
          <Image
            src={ProjectPuffin2}
            alt="Aviatr member explaining concepts on a whiteboard to other members in a classroom"
            className="mb-4"
          />
          <p className="mx-[4%] mb-10 font-jost leading-relaxed">
            This program includes a quarter-long ENGR course, taught by Juniors
            and Seniors from our club, where participants will receive guidance
            in building a personal drone. Throughout the course, members will
            learn basic circuit design, CAD, and fundamental physics to complete
            their drone by the end of the quarter.
          </p>
        </motion.div>
        <motion.div
          variants={animateLeftMobileSection}
          initial="hidden"
          whileInView="show"
        >
          <Image
            src={ProjectPuffin3}
            alt="Aviatr member explaining concepts on a whiteboard to other members in a classroom"
            className="mb-4"
          />
          <p className="mx-[4%] font-jost leading-relaxed">
            Successfully finishing the Puffin project will equip members with
            drone theory knowledge and teamwork experience. Freshmen and
            Sophomores at UCR can join the Aviat&apos;R team only after
            completing one quarter of the Puffin project and building a
            functional quadcopter. Alternatively, students who believe their
            skills exceed the program&apos;s requirements may join through
            sub-team intro projects and in-person evaluations.
          </p>
        </motion.div>
      </div>

      <div className="hidden sm:block">
        <motion.p
          className="text-md mx-[2%] mb-[5%] font-jost sm:text-justify md:text-xl md:leading-relaxed"
          variants={animateText}
          transition={{ duration: 0.7, delay: 0.4 }}
          initial="hidden"
          whileInView="show"
        >
          A common challenge in many engineering organizations is the lack of
          effective mentorship. Novice members often find themselves assigned to
          complex projects requiring advanced knowledge, which can be
          overwhelming. To address this issue, the Puffin division offers a
          program designed for newer members to "get their feet wet" and grasp
          the fundamentals of aeronautical engineering and drone design. This
          program includes a quarter-long ENGR course, taught by Juniors and
          Seniors from our club, where participants will receive guidance in
          building a personal drone. Throughout the course, members will learn
          basic circuit design, CAD, and fundamental physics to complete their
          drone by the end of the quarter. Successfully finishing the Puffin
          project will equip members with drone theory knowledge and teamwork
          experience. Freshmen and Sophomores at UCR can join the Aviat'R team
          only after completing one quarter of the Puffin project and building a
          functional quadcopter. Alternatively, students who believe their
          skills exceed the program&apos;s requirements may join through
          sub-team intro projects and in-person evaluations.
        </motion.p>
        <motion.div
          className="sm:grid sm:grid-cols-3 sm:gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Image
              src={ProjectPuffin1}
              alt="Aviatr member explaining concepts on a whiteboard to other members in a classroom"
            />
          </motion.div>
          <motion.div variants={item}>
            <Image
              src={ProjectPuffin2}
              alt="Simulation of airflow over an aircraft model showing colored velocity streamlines in a CAD software interface"
              className="h-full"
            />
          </motion.div>
          <motion.div variants={item}>
            <Image
              src={ProjectPuffin3}
              alt="Aviatr members in a classroom setting with laptops, listening attentively to a presentation"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPuffin;
