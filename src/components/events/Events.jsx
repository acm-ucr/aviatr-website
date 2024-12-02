"use client";
import UpcomingEvents from "../events/UpcomingEvent";

const Events = ({ events }) => {
  return (
    <div className="itmems-center flex w-full flex-col justify-center">
      {events !== null && events.length > 0 ? (
        events
          .sort((a, b) => a.start - b.start)
          .filter((event) => event.start > new Date())
          .slice(0, 4)
          .map((event) => {
            let formattedString = "";
            if (event.allDay) {
              formattedString = "All Day";
            } else {
              const startHours =
                event.start.getHours() > 12
                  ? event.start.getHours() - 12
                  : event.start.getHours();
              const startMinutes = event.start
                .getMinutes()
                .toString()
                .padStart(2, "0");
              const startPeriod = event.start.getHours() >= 12 ? "PM" : "AM";

              const endHours =
                event.end.getHours() > 12
                  ? event.end.getHours() - 12
                  : event.end.getHours();
              const endMinutes = event.end
                .getMinutes()
                .toString()
                .padStart(2, "0");
              const endPeriod = event.end.getHours() >= 12 ? "PM" : "AM";
              formattedString = `${startHours}:${startMinutes} ${startPeriod} - ${endHours}:${endMinutes} ${endPeriod}`;
            }

            return (
              <UpcomingEvents
                key={event.id}
                day={event.start.getDate()}
                dayTextStroke={event.start.getDate()}
                date={formattedString}
                dateTextColor={formattedString}
                time={formattedString}
                title={event.title}
                description={event.description}
              />
            );
          })
      ) : (
        <p className="w-full text-center font-jost text-lg font-bold text-white">
          No Upcoming Events
        </p>
      )}
    </div>
  );
};

export default Events;
