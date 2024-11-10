import React from "react";
import BoardMember from "./BoardMember";
import Image from "next/image";
import DefaultBoardMemberImage from "@/images/about/defaultBoardMemberImage.webp";
import BMSLeftBorder from "@/images/about/BMSLeftBorder.webp";
import BMSRightBorder from "@/images/about/BMSRightBorder.webp";
import TitleComponent from "@/components/about/TitleCompoent";

const BoardMemberSection = () => {
  return (
    <div className="text-accent relative mx-auto mb-10 max-w-[80%] p-48 py-10 text-center">
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
      <div className="mb-10 flex w-full flex-col items-center gap-3">
        {/* <div className="font-heading mb-2 text-5xl font-medium text-white">
          The Board
        </div> */}
        <TitleComponent text="The Board" color="text-white" />

        {/* <div className="h-0.5 w-1/4 bg-white" /> */}
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
        <BoardMember
          name="Firstname Lastname"
          position="POSITION"
          image={DefaultBoardMemberImage.src}
        />
        <BoardMember
          name="Firstname Lastname"
          position="POSITION"
          image={DefaultBoardMemberImage.src}
        />
        <BoardMember
          name="Firstname Lastname"
          position="POSITION"
          image={DefaultBoardMemberImage.src}
        />
        <BoardMember
          name="Firstname Lastname"
          position="POSITION"
          image={DefaultBoardMemberImage.src}
        />
        <BoardMember
          name="Firstname Lastname"
          position="POSITION"
          image={DefaultBoardMemberImage.src}
        />
        <BoardMember
          name="Firstname Lastname"
          position="POSITION"
          image={DefaultBoardMemberImage.src}
        />
        <BoardMember
          name="Firstname Lastname"
          position="POSITION"
          image={DefaultBoardMemberImage.src}
        />
        <BoardMember
          name="Firstname Lastname"
          position="POSITION"
          image={DefaultBoardMemberImage.src}
        />
      </div>
    </div>
  );
};

export default BoardMemberSection;
