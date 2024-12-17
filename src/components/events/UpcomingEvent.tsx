import React from "react";

interface UpcomingEventProps {
  day: string;
  date: string;
  time: string;
  title: string;
  description: string;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({
  day,
  date,
  time,
  title,
  description,
}) => {
  return (
    <>
      <div className="mt-20 flex justify-center"></div>
      <div className="grid grid-cols-7 font-jost text-white">
        <div className="col-span-2 grid grid-rows-2 font-bungee-hairline">
          <div className="relative">
            <p
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 transform text-3xl text-stroke-aviatr-pink-200 stroke-weight-[4px] md:text-5xl md:stroke-weight-[5px] lg:text-7xl`}
            >
              {day}
            </p>
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 transform text-3xl text-white md:text-5xl lg:text-7xl">
              {day}
            </p>
          </div>
          <div className="justify-items-center">
            <p
              className={`text-lg text-stroke-aviatr-pink-200 stroke-weight-[1px] md:text-3xl lg:text-5xl`}
            >
              {date}
            </p>
          </div>
        </div>
        <div className="col-span-5 mr-[5%] font-jost">
          <div className="flex items-center">
            <p className="pb-2 font-metrophobic text-sm text-stroke-white stroke-weight-[1px] sm:pb-4 md:text-3xl lg:pb-6 lg:text-4xl">
              {title}
            </p>
            <div className="mb-1 ml-[3%] flex-grow border-t-2 border-white sm:mb-3 lg:mb-4"></div>
            <div className="mb-1 h-3 w-3 rotate-45 transform bg-white sm:mb-3 lg:mb-4"></div>
          </div>
          <div className="mx-[5%] sm:mx-[2%]">
            <p className="pb-1 text-sm lg:text-xl">
              <span className="font-semibold">Time: </span>
              {time}
            </p>
            <p className="pb-4 text-xs sm:pb-6 lg:text-base">{description}</p>
          </div>
          <hr className="border-t-2"></hr>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvent;
