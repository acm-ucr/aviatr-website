import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from "react-icons/hi2";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="m-auto rounded-full border-white md:w-1/3 md:py-[1px]">
        <div className="flex items-center justify-center rounded-full text-white md:flex-row">
          <HiMiniArrowLongLeft
            onClick={() => {
              onNavigate("PREV");
            }}
            className="text-5xl text-white hover:cursor-pointer"
          />
          <div>
            <p className="m-0 font-bungee-hairline text-4xl font-bold md:text-5xl">
              {date.toLocaleString("default", { month: "long" })}{" "}
            </p>
          </div>
          <HiMiniArrowLongRight
            onClick={() => onNavigate("NEXT")}
            className="text-5xl text-white hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomToolbar;
