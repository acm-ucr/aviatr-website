import React from "react";

interface TitleComponentProps {
  text: string;
  color: string;
  lineWidth: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({
  text,
  color,
  lineWidth,
}) => {
  return (
    <div className="mb-10 flex w-fit flex-col items-center gap-3">
      <div
        className={`font-heading mb-2 text-ellipsis font-metrophobic text-5xl font-bold ${color}`}
      >
        {text}
      </div>
      <div className={`h-0.5 ${lineWidth} ${color.replace("text-", "bg-")}`} />
    </div>
  );
};

export default TitleComponent;
