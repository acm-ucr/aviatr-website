import React from "react";

// Define the props type
interface TitleProps {
  title: string;
  width: string;
  lineMarginShift: string;
}

const ShiftedTitle: React.FC<TitleProps> = ({
  title,
  width,
  lineMarginShift,
}) => {
  return (
    <div className={`text-3xl text-white ${width}`}>
      {title}
      <div className={` ${lineMarginShift} border-b-4 border-white`} />
    </div>
  );
};

export default ShiftedTitle;
