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
    <div className="flex w-64 flex-col items-center justify-center rounded-lg p-4 text-center">
      <div className="mb-5 h-56 w-48 rounded-lg object-cover">
        <Image src={image} alt={`${name}'s picture`} width={500} height={500} />
      </div>
      <div>
        <div className="text-xl font-bold text-white">{name}</div>
        <div className="text-lg text-gray-200">{position}</div>
      </div>
    </div>
  );
};

export default BoardMember;
