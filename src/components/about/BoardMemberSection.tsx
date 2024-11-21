"use client";
import React, { useState, useEffect } from "react";
import BoardMember from "./BoardMember";
import boardMemberList from "@/data/boardMemberList";
import Image from "next/image";
import BMSLeftBorder from "@/../public/about/BMSLeftBorder.webp";
import BMSRightBorder from "@/../public/about/BMSRightBorder.webp";
import CenteredLineTitle from "@/components/CenteredLineTitle";
import MemberDetail from "@/components/MemberDetail";

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
    <div className="text-accent relative mx-auto mb-10 max-w-[80%] lg:max-w-[90%] xl:max-w-[80%] px-4 sm:px-10 md:px-24 lg:px-8 xl:px-20 2xl:px-48 py-10 text-center">
      {/* Decorative Borders */}
      <div className="h-28 w-28 sm:h-48 sm:w-48 absolute bottom-0 left-0">
        <Image src={BMSRightBorder} alt="Border" />
      </div>
      <div className="h-28 w-28 sm:h-48 sm:w-48 absolute bottom-0 right-0">
        <Image src={BMSLeftBorder} alt="Border" />
      </div>
      <div className="h-28 w-28 sm:h-48 sm:w-48 absolute right-0 top-0 rotate-180 transform">
        <Image src={BMSRightBorder} alt="Border" />
      </div>
      <div className="h-28 w-28 sm:h-48 sm:w-48 absolute left-0 top-0 rotate-180 transform">
        <Image src={BMSLeftBorder} alt="Border" />
      </div>

      {/* Title Section */}
      <div className="mt-4 sm:mt-12 flex justify-center ">
        <CenteredLineTitle
          text="The Board"
          textColor="text-white"
          lineColor="bg-white"
          lineWidth="w-[110%]"
        />
      </div>

      {/* Board Members Grid */}
      <div className="grid mb-14 justify-items-center sm:gap-8 grid-cols-2 lg:grid-cols-4">
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
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex justify-center bg-gray-500 bg-opacity-70">
          {/* //   <div className="relative max-w-[600px] rounded-3xl bg-slate-900 p-10 text-center text-white">  */}
          <div className="my-[10%] w-[90%] lg:w-[50%]">
            <MemberDetail
              hobby={selectedMember.hobby}
              major={selectedMember.major}
              year={selectedMember.year}
              description={selectedMember.description}
              setPopup={setPopup}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardMemberSection;
