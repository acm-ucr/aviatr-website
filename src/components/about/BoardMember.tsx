import React from "react";
import Image from "next/image";

const BoardMember = ({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) => {
  return (
    <div className="flex w-52 flex-col items-center justify-center rounded-lg p-4 text-center hover:cursor-pointer sm:w-64">
      <div className="relative mb-5 h-32 w-28 overflow-hidden rounded-lg bg-gray-300 sm:h-56 sm:w-48">
        <Image
          src={image}
          alt={`${name}'s picture`}
          layout="fill"
          className="object-cover object-top"
        />
      </div>
      <div className="text-sm sm:text-xl">
        <div className="font-bold text-white">{name}</div>
        <div className="text-gray-200">{position}</div>
      </div>
    </div>
  );
};

export default BoardMember;
