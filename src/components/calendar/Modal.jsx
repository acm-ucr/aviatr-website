import { AiOutlinePlus } from "react-icons/ai";
// import reactHtmlParser from "html-react-parser";

const Modal = ({ event, setEvent }) => {
  return (
    <div className="bg-art-purple-200 fixed left-1/2 top-[56%] z-10 w-[75vw] -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 font-jost shadow-xl drop-shadow-lg md:w-[50vw]">
      <div
        className={`flex items-center justify-between ${event.color || "bg-art-purple-200"}`}
      >
        <p
          className={
            "m-0 px-3 py-2 text-lg text-black md:px-4 md:py-3 md:text-2xl"
          }
        >
          {event.summary || "No Title"}
        </p>

        <div className="absolute right-2 px-12 text-lg text-black md:px-12 md:py-3 md:text-2xl">
          {event.allDay
            ? "All Day"
            : new Date(event.start).toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
              }) +
              " - " +
              new Date(event.end).toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
              })}
        </div>
        <AiOutlinePlus
          className="text-art-pink-400/90 text-2xl"
          onClick={() => setEvent(null)}
        />
      </div>
      <div className="font-nunito pb-8 pt-4 md:px-8">
        <p>
          <span className="font-semibold">Description: </span>
          {event.description || "No description available."}
        </p>
        <p>
          <span className="font-semibold">Location: </span>
          {event.location || "No location available."}
        </p>
      </div>
    </div>
  );
};

export default Modal;
