"use client";
import React, { useState, useEffect } from "react";
import BoardMember from "./BoardMember";
import boardMemberList from "@/data/boardMemberList";
import Image from "next/image";
import BMSLeftBorder from "@/../public/about/BMSLeftBorder.webp";
import BMSRightBorder from "@/../public/about/BMSRightBorder.webp";
import CenteredLineTitle from "@/components/CenteredLineTitle";
import MemberDetail from "@/components/about/MemberDetail";
import { motion } from "motion/react";

import { AnimatePresence } from "motion/react";

const BoardMemberSection = () => {
  // State to manage which member is selected
  type BoardMemberType = {
    name: string;
    position: string;
    hobby: string;
    major: string;
    year: string;
    description: string;
    image: string;
  };

  const [selectedMember, setSelectedMember] = useState<BoardMemberType | null>(
    null,
  );
  const [popup, setPopup] = useState<boolean>(true);

  // Function to handle clicking on a board member
  const handleMemberClick = (member: BoardMemberType) => {
    setSelectedMember(member);
  };

  useEffect(() => {
    if (popup == false) {
      setSelectedMember(null);
      setPopup(true);
    }
  }, [popup]);

  const animateScaleUp = {
    hidden: { opacity: 0, scale: 0, y: 100 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.4 },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, scale: 1, y: 200 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.8 },
    },
  };

  const transition = {
    duration: 0.7,
  };

  return (
    <div className="text-accent relative mx-auto mb-10 w-5/6 px-4 py-10 text-center sm:px-10 md:px-24 lg:px-8 xl:px-20 2xl:px-48">
      {/* Decorative Borders */}
      <div className="absolute bottom-0 left-0 h-28 w-28 sm:h-48 sm:w-48">
        <Image src={BMSRightBorder} alt="Border" />
      </div>
      <div className="absolute bottom-0 right-0 h-28 w-28 sm:h-48 sm:w-48">
        <Image src={BMSLeftBorder} alt="Border" />
      </div>
      <div className="absolute right-0 top-0 h-28 w-28 rotate-180 transform sm:h-48 sm:w-48">
        <Image src={BMSRightBorder} alt="Border" />
      </div>
      <div className="absolute left-0 top-0 h-28 w-28 rotate-180 transform sm:h-48 sm:w-48">
        <Image src={BMSLeftBorder} alt="Border" />
      </div>

      {/* Title Section */}
      <motion.div
        className="flex justify-center"
        variants={animateScaleUp}
        transition={{ ...transition, delay: 0.2 }}
        initial="hidden"
        whileInView="show"
      >
        <div className="mt-4 flex justify-center sm:mt-12">
          <CenteredLineTitle
            text="The Board"
            textColor="text-white"
            lineColor="bg-white"
            lineWidth="w-[110%]"
          />
        </div>
      </motion.div>

      <div className="flex w-full flex-wrap justify-center pb-6">
        {boardMemberList.map((member, index) => (
          <div
            onClick={() =>
              handleMemberClick({
                name: member.name,
                position: member.position,
                image: member.image,
                hobby: member.hobby,
                major: member.major,
                year: member.year,
                description: member.description,
              })
            }
            key={index}
          >
            <motion.div
              className="flex justify-center"
              variants={slideIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.04 }}
              initial="hidden"
              whileInView="show"
            >
              <BoardMember
                name={member.name}
                position={member.position}
                image={member.image}
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Pop-Up with Member Details */}
      <AnimatePresence>
        {selectedMember && (
          <MemberDetail
            hobby={selectedMember.hobby}
            major={selectedMember.major}
            year={selectedMember.year}
            description={selectedMember.description}
            image={selectedMember.image}
            setPopup={setPopup}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BoardMemberSection;
