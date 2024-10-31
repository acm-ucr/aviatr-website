const UpcomingEvent = ({
  day = "",
  date = "",
  time = "",
  title = "",
  description = "",
  color = "",
}) => {
  return (
    <div className="grid grid-cols-7 text-white">
      <div className="col-span-2 grid grid-rows-2 font-bungee-hairline">
          <div className="relative">
            <p
              className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 text-stroke-${color} stroke-weight-[3px] md:stroke-weight-[5px] text-3xl md:text-5xl lg:text-6xl`}
            >
              {day}
            </p>
            <p className="absolute left-1/2 transform -translate-x-1/2 bottom-0 text-white text-3xl md:text-5xl lg:text-6xl">{day}</p>
          </div>
          <div className="justify-items-center">
            <p
              className={`text-${color} -mt-2 text-lg md:text-3xl lg:text-4xl`}
            >
              {date}
            </p>
          </div>
      </div>
      <div className="col-span-5 mr-[5%] font-jost">
        <div className="flex items-center">
          <p className="pb-2 text-xl sm:pb-4 md:text-3xl lg:pb-6 lg:text-4xl">{title}</p>
          <div className="flex-grow ml-[3%] mb-1 sm:mb-3 lg:mb-4 border-t-2 border-white"></div>
          <div className="transform rotate-45 mb-1 sm:mb-3 lg:mb-4 bg-white w-3 h-3"></div>
        </div>
        <div className="mx-[5%] sm:mx-[2%]">
          <p className="pb-1 text-sm lg:text-xl">
            <span className="font-semibold">Time: </span>
            {time}
          </p>
          <p className="pb-4 text-xs sm:pb-6 lg:text-base">
            {description}
          </p>
        </div>
        <hr className="border-t-2"></hr>
      </div>
    </div>
  );
};

export default UpcomingEvent;
