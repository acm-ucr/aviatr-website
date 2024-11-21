"use client";
import React, { useState, useEffect } from "react";
import BoardMember from "./BoardMember";
import boardMemberList from "@/data/boardMemberList";
import Image from "next/image";
import BMSLeftBorder from "@/../public/about/BMSLeftBorder.webp";
import BMSRightBorder from "@/../public/about/BMSRightBorder.webp";
import CenteredLineTitle from "@/components/CenteredLineTitle";
import MemberDetail from "@/components/MemberDetail";

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

  return (
    <div className="text-accent relative mx-auto mb-10 max-w-[80%] px-4 py-10 text-center sm:px-10 md:px-24 lg:max-w-[90%] lg:px-8 xl:max-w-[80%] xl:px-20 2xl:px-48">
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
      <div className="mt-4 flex justify-center sm:mt-12">
        <CenteredLineTitle
          text="The Board"
          textColor="text-white"
          lineColor="bg-white"
          lineWidth="w-[110%]"
        />
      </div>

      {/* Board Members Grid */}
      <div className="mb-14 grid grid-cols-2 justify-items-center sm:gap-8 lg:grid-cols-4">
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
            <BoardMember
              name={member.name}
              position={member.position}
              image={member.image}
            />
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
            setPopup={setPopup}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BoardMemberSection;
