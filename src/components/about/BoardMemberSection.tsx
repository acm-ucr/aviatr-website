"use client";

import React, { useState } from "react";
import BoardMember from "./BoardMember";
import Image from "next/image";
import DefaultBoardMemberImage from "@/../public/about/defaultBoardMemberImage.webp";
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

  const [selectedMember, setSelectedMember] = useState<BoardMemberType | null>(null);

  // Function to handle clicking on a board member
  const handleMemberClick = (member: BoardMemberType) => {
    setSelectedMember(member);
  };

  // Sample board members data
  const boardMembers = [
    { name: "Firstname Lastname", position: "POSITION", hobby: "Hobby", major: "Major", year: "Year", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: DefaultBoardMemberImage.src },
    { name: "Firstname Lastname", position: "POSITION", hobby: "Hobby", major: "Major", year: "Year", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: DefaultBoardMemberImage.src },
    { name: "Firstname Lastname", position: "POSITION", hobby: "Hobby", major: "Major", year: "Year", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: DefaultBoardMemberImage.src },
    { name: "Firstname Lastname", position: "POSITION", hobby: "Hobby", major: "Major", year: "Year", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: DefaultBoardMemberImage.src },
    { name: "Firstname Lastname", position: "POSITION", hobby: "Hobby", major: "Major", year: "Year", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: DefaultBoardMemberImage.src },
    { name: "Firstname Lastname", position: "POSITION", hobby: "Hobby", major: "Major", year: "Year", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: DefaultBoardMemberImage.src },
    { name: "Firstname Lastname", position: "POSITION", hobby: "Hobby", major: "Major", year: "Year", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: DefaultBoardMemberImage.src },
    { name: "Firstname Lastname", position: "POSITION", hobby: "Hobby", major: "Major", year: "Year", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: DefaultBoardMemberImage.src },

  ];

  return (
    <div className="text-accent relative mx-auto mb-10 max-w-[80%] p-48 py-10 text-center">
      {/* Decorative Borders */}
      <div className="h-50 w-50 absolute bottom-0 left-0">
        <Image src={BMSRightBorder} alt="Border" />
      </div>
      <div className="h-50 w-50 absolute bottom-0 right-0">
        <Image src={BMSLeftBorder} alt="Border" />
      </div>
      <div className="h-50 w-50 absolute right-0 top-0 rotate-180 transform">
        <Image src={BMSRightBorder} alt="Border" />
      </div>
      <div className="h-50 w-50 absolute left-0 top-0 rotate-180 transform">
        <Image src={BMSLeftBorder} alt="Border" />
      </div>

      {/* Title Section */}
      <div className="mb-10 flex justify-center">
        <CenteredLineTitle text="The Board" color="text-white" lineWidth="w-[110%]" />
      </div>

      {/* Board Members Grid */}
      <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
        {boardMembers.map((member, index) => (
          <div
            key={index}
            onClick={() => handleMemberClick(member)}
            className="cursor-pointer"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative p-10 bg-slate-900 rounded-3xl w-[90%] max-w-[600px] text-center text-white">
            {/* Member Detail Component */}
            <MemberDetail
              hobby={selectedMember.hobby}
              major={selectedMember.major}
              year={selectedMember.year}
              description={selectedMember.description}
              closePopup={() => setSelectedMember(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardMemberSection;
