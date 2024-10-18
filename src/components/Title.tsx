import React from "react";

// Define the props type
interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="text-3xl text-white">
      {title}
      <div className="ml-8 w-1/3 border-b-4 border-white" />
    </div>
  );
};

export default Title;
