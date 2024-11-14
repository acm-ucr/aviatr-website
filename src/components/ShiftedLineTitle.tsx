import React from "react";

// Define the props type
interface TitleProps {
  title: string;
  width: string;
  lineMarginShift: string;
  textSize: string;
}

const Title: React.FC<TitleProps> = ({
  title,
  width,
  lineMarginShift,
  textSize,
}) => {
  return (
    <div className="w-fit text-nowrap text-white">
      <p className={`text-3xl leading-relaxed sm:leading-tight ${textSize}`}>
        {title}
      </p>
      <div
        className={`${lineMarginShift} mt-1 w-[100%] border-b-2 sm:mt-6 ${width} border-white`}
      />
    </div>
  );
};

export default Title;
