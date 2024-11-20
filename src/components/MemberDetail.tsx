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
      <div className="text-accent relative flex h-[50%] w-[70%] rounded-3xl bg-black py-[8%] md:py-[10%] lg:w-[90%] xl:h-[60%] xl:w-[50%] xl:py-[5%]">
        {/* Close button */}
        <div
          onClick={() => setPopup(false)}
          className="hover:cursor absolute right-[10%] top-[8%] cursor-pointer font-bungee-hairline text-xl text-white text-stroke-white stroke-weight-[2px] md:right-[10%] md:text-2xl md:stroke-weight-[3px] lg:top-[12%]"
        >
          CLOSE
        </div>

        {/* Left & Right decorative borders */}
        <div className="absolute left-[8%] top-[4%] hidden h-[20%] w-[20%] rotate-180 md:block lg:top-[12%]">
          <Image src={BMSLeftBorder} alt="Border" />
        </div>
        <div className="absolute bottom-[4%] right-[8%] hidden h-[20%] w-[20%] md:block lg:bottom-[12%]">
          <Image src={BMSLeftBorder} alt="Border" />
        </div>

        {/* Main content */}
        <div className="mx-auto flex max-h-[100%] w-[75%] flex-col gap-2 md:gap-5 lg:gap-10">
          <div className="overflow-y-auto overflow-x-hidden">
            {/* Upper section: Image and Labels */}
            <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center">
              {/* Image section */}

              <Image
                src={DefaultBoardMemberImage}
                alt="Member Image"
                className="h-auto w-[40%] rounded-2xl md:w-[30%]"
              />

              {/* Details section */}
              <div className="text-md flex w-[67%] flex-col text-nowrap text-left font-jost text-white md:ml-4 md:text-xl">
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
                <div className="mt-1 flex flex-row items-center md:mt-4">
                  <div className="mb-1 h-2 w-2 rotate-45 transform bg-white sm:mb-3 md:h-3 md:w-3 lg:mb-4"></div>
                  <div className="mb-1 flex-grow border-t-2 border-white sm:mb-3 lg:mb-4"></div>
                  <div className="mb-1 h-2 w-2 rotate-45 transform bg-white sm:mb-3 md:h-3 md:w-3 lg:mb-4"></div>
                </div>
              </div>
            </div>

            {/* Lower section: Description */}
            <div className="text-md mt-2 text-left font-jost text-white md:mt-10 md:text-xl">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
