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
    <div className={`${textSize} text-white ${width} text-nowrap`}>
      {title}
      <div className={` ${lineMarginShift} mt-6 border-b-2 border-white`} />
    </div>
  );
};

export default Title;
