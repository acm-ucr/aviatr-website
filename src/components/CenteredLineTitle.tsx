import React from "react";

interface TitleComponentProps {
  text: string;
  textColor: string;
  lineColor: string;
  lineWidth: string;
}

const TitleCompoent: React.FC<TitleComponentProps> = ({
  text,
  textColor,
  lineColor,
  lineWidth,
}) => {
  return (
    <div className="mb-10 flex w-fit flex-col items-center gap-3">
      <div
        className={`font-heading mb-2 text-ellipsis text-center font-metrophobic text-4xl sm:text-5xl 2xl:text-6xl font-bold ${textColor}`}
      >
        {text}
      </div>
      <div className={`h-0.5 ${lineWidth} ${lineColor}`} />
    </div>
  );
};

export default TitleCompoent;
