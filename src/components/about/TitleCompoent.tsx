import React from 'react';

interface TitleComponentProps {
    text: string;
    color: string;
}

const TitleCompoent: React.FC<TitleComponentProps> = ({ text, color }) => {
    return (
      <div className='mb-10 flex w-full flex-col items-center gap-3'>
        <div className={`font-bold font-heading mb-2 font-metrophobic text-5xl text-ellipsis ${color}`}>
          {text}
        </div>
        <div className={`h-0.5 w-1/3 ${color.replace('text-', 'bg-')}`} />
      </div>
    );
  };

  
export default TitleCompoent;