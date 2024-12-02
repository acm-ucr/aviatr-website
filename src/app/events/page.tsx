import UpcomingEvent from "@/components/events/UpcomingEvent";
import RecurringLogo from "@/components/RecurringLogo";
import Calendar from "@/components/calendar/Calendar";

const Events = () => {
  return (
    <div>
      <div className="p-16">
        <RecurringLogo />
      </div>
      <Calendar />
      <UpcomingEvent
        day="MON"
        dayTextStroke="text-stroke-aviatr-pink-200"
        date="09/08"
        dateTextColor="text-stroke-aviatr-pink-200"
        time="3:00 pm"
        title="Chapter Meeting"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan urna nec libero fringilla, ac fermentum purus tempus. Sed et nisi velit. Sed sit amet justo magna. Vivamus malesuada, odio quis consectetur convallis, nulla erat feugiat risus, ut ultricies velit ex eu odio. Cras aliquet euismod ipsum nec rutrum. Integer in lorem id ipsum gravida convallis."
      />
    </div>
  );
};
export default Events;
