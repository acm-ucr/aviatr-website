"use client";
import React from "react";
import Image from "next/image";
import BMSLeftBorder from "@/../public/about/BMSLeftBorder.webp";
import DefaultBoardMemberImage from "@/../public/about/defaultBoardMemberImage.webp";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-70">
      <div className="text-accent relative flex h-[50%] w-[90%] rounded-3xl bg-black px-[8%] py-[7%] xl:h-[60%] xl:w-[50%]">
        {/* Close button */}
        <div
          onClick={() => setPopup(false)}
          className="hover:cursor absolute right-[10%] top-[8%] cursor-pointer font-bungee-hairline text-xl font-bold text-white text-stroke-white stroke-weight-[2px] md:right-[10%] md:top-[12%] md:text-2xl lg:stroke-weight-[3px]"
        >
          CLOSE
        </div>
        {/* Left & Right decorative borders */}
        <div className="absolute left-[8%] top-0 h-[20%] w-[20%] rotate-180 md:top-[12%]">
          <Image src={BMSLeftBorder} alt="Border" />
        </div>
        <div className="absolute bottom-0 right-[8%] h-[20%] w-[20%] md:bottom-[12%]">
          <Image src={BMSLeftBorder} alt="Border" />
        </div>

        {/* Main content */}
        <div className="flex w-full flex-col gap-2 lg:gap-10">
          {/* Upper section: Image and Labels */}
          <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center md:gap-10">
            {/* Image section */}

            <Image
              src={DefaultBoardMemberImage}
              alt="Member Image"
              className="h-auto rounded-2xl xl:w-[30%]"
            />

            {/* Details section */}
            <div className="text-md flex w-[67%] flex-col text-nowrap text-left font-jost text-white md:text-xl">
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
              {/* <Image src={LineImage} alt="Line" className="mt-2 w-full" /> */}
              <div className="mt-4 flex flex-row items-center">
                <div className="mb-1 h-2 w-2 rotate-45 transform bg-white sm:mb-3 md:h-3 md:w-3 lg:mb-4"></div>
                <div className="mb-1 flex-grow border-t-2 border-white sm:mb-3 lg:mb-4"></div>
                <div className="mb-1 h-2 w-2 rotate-45 transform bg-white sm:mb-3 md:h-3 md:w-3 lg:mb-4"></div>
              </div>
            </div>
          </div>

          {/* Lower section: Description */}
          <div className="text-md overflow-hidden break-words text-left font-jost text-white md:text-xl">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
