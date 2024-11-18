"use client";
import React from "react";
import Image from "next/image";
import BMSLeftBorder from "@/../public/about/BMSLeftBorder.webp";
import DefaultBoardMemberImage from "@/../public/about/defaultBoardMemberImage.webp";
import LineImage from "@/../public/about/Line_20.webp";

interface MemberDetailProps {
  hobby: string;
  major: string;
  year: string;
  description: string;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemberDetail: React.FC<MemberDetailProps> = ({
  hobby,
  major,
  year,
  description,
  setPopup,
}) => {
  return (
    <div className="text-accent relative mx-auto mb-10 rounded-3xl bg-black p-10">
      {/* Close button */}
      <div
        onClick={() => setPopup(false)}
        className="hover:cursor font-outline-2 absolute right-20 top-20 cursor-pointer font-bungee-hairline text-xl font-bold text-white"
      >
        CLOSE
      </div>
      {/* Left & Right decorative borders */}
      <div className="h-25 w-25 absolute left-20 top-20 rotate-180">
        <Image src={BMSLeftBorder} alt="Border" />
      </div>
      <div className="h-25 w-25 absolute bottom-20 right-20">
        <Image src={BMSLeftBorder} alt="Border" />
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-10 p-36">
        {/* Upper section: Image and Labels */}
        <div className="flex flex-row items-center justify-center gap-10">
          {/* Image section */}
          <div className="w-[33%] flex-shrink-0">
            <Image
              src={DefaultBoardMemberImage}
              alt="Member Image"
              className="h-auto w-full rounded-2xl"
            />
          </div>

          {/* Details section */}
          <div className="flex w-[67%] flex-col text-left font-jost text-2xl text-white">
            <p className="mb-4">
              <strong className="text-aviatr-blue-500">Hobbies:</strong> {hobby}
            </p>
            <p className="mb-4">
              <strong className="text-aviatr-purple-100">Major:</strong> {major}
            </p>
            <p className="mb-4">
              <strong className="text-aviatr-pink-200">Year:</strong> {year}
            </p>
            <Image src={LineImage} alt="Line" className="mt-6" />
          </div>
        </div>

        {/* Lower section: Description */}
        <div className="overflow-hidden break-words text-left font-jost text-xl text-white">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
