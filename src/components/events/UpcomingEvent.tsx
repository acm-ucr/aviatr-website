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
      <div className="col-span-2 content-center text-center font-bungee-hairline">
        <p
          className={`text-shadow-sm lg:text-shadow shadow-${color} text-3xl md:text-5xl lg:text-6xl`}
        >
          {day}
        </p>
        <p
          className={`text-${color} -mt-3 text-lg md:-mt-2 md:text-3xl lg:text-4xl`}
        >
          {date}
        </p>
      </div>
      <div className="col-span-5 mr-[5%] font-jost">
        <p className="pb-2 text-xl sm:pb-4 md:text-3xl lg:pb-6 lg:text-4xl">
          {title}
        </p>
        <p className="mx-[5%] pb-1 text-sm sm:mx-[2%] lg:text-xl">
          <span className="font-semibold">Time: </span>
          {time}
        </p>
        <p className="mx-[5%] pb-4 text-xs sm:mx-[2%] sm:pb-6 lg:text-base">
          {description}
        </p>
        <hr className="border-t-2"></hr>
      </div>
    </div>
  );
};

export default UpcomingEvent;
