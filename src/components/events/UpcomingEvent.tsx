// Define the props type
interface UpcomingEventProps {
  day: string;
  dayTextStroke: string;
  date: string;
  dateTextColor: string;
  time: string;
  title: string;
  description: string;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({
  day,
  dayTextStroke,
  date,
  dateTextColor,
  time,
  title,
  description,
}) => {
  return (
    <div className="grid grid-cols-7 font-jost text-white">
      <div className="col-span-2 grid grid-rows-2 font-bungee-hairline">
        <div className="relative">
          <p
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 transform ${dayTextStroke} md:text-5xl md:stroke-weight-[5px] lg:text-7xl text-3xl stroke-weight-[4px]`}
          >
            {day}
          </p>
          <p className="md:text-5xl lg:text-7xl absolute bottom-0 left-1/2 -translate-x-1/2 transform text-3xl text-white">
            {day}
          </p>
        </div>
        <div className="justify-items-center">
          <p
            className={`${dateTextColor} md:text-3xl lg:text-5xl text-lg stroke-weight-[1px]`}
          >
            {date}
          </p>
        </div>
      </div>
      <div className="col-span-5 mr-[5%] font-jost">
        <div className="flex items-center">
          <p className="sm:pb-4 md:text-3xl lg:pb-6 lg:text-4xl pb-2 font-metrophobic text-xl text-stroke-white stroke-weight-[1px]">
            {title}
          </p>
          <div className="sm:mb-3 lg:mb-4 mb-1 ml-[3%] flex-grow border-t-2 border-white"></div>
          <div className="sm:mb-3 lg:mb-4 mb-1 h-3 w-3 rotate-45 transform bg-white"></div>
        </div>
        <div className="sm:mx-[2%] mx-[5%]">
          <p className="lg:text-xl pb-1 text-sm">
            <span className="font-semibold">Time: </span>
            {time}
          </p>
          <p className="sm:pb-6 lg:text-base pb-4 text-xs">{description}</p>
        </div>
        <hr className="border-t-2"></hr>
      </div>
    </div>
  );
};

export default UpcomingEvent;
