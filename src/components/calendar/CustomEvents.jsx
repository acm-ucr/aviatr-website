import { FaComputer } from "react-icons/fa6";

const CustomEvent = ({ event }) => {
  const Icon = FaComputer;
  const startTime = event.start
    ? new Date(event.start).toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "N/A";

  const endTime = event.end
    ? new Date(event.end).toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "N/A";

  return (
    <div className="flex justify-start rounded-lg bg-white font-jost text-xs">
      <div className="relative hidden items-center pl-1 md:block">
        <Icon className="absolute top-0.5 mr-1 text-inherit" />
      </div>
      <div className="flex flex-col pl-1 md:pl-4">
        <div className="inline-flex items-start text-wrap">{event.summary}</div>
        <div className="mt-1 hidden md:block">
          {!event.allDay && (
            <p>
              {startTime}-{endTime} - {event.location}
            </p>
          )}
          {event.allDay && <p>{event.location}</p>}
        </div>
      </div>
    </div>
  );
};

export default CustomEvent;
