import React from "react";

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
    <div className="flex flex-col items-center justify-center w-64 p-4 rounded-lg text-center shadow-lg">
      <img
        src={image}
        alt={`${name}'s profile image`}
        className="w-48 h-56 rounded-lg mb-5 object-cover"
      />
      <div>
        <div className="text-xl font-bold">{name}</div>
        <div className="text-lg text-gray-600">{position}</div>
      </div>
    </div>
  );
};

export default BoardMember;