import UpcomingEvent from "@/components/events/UpcomingEvent";

const Events = () => {
  return (
    <div>
      <div className="justify-center text-white">Events</div>;
      <UpcomingEvent
        day="MON"
        date="09/08"
        time="3:00 pm"
        title="Chapter Meeting"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan urna nec libero fringilla, ac fermentum purus tempus. Sed et nisi velit. Sed sit amet justo magna. Vivamus malesuada, odio quis consectetur convallis, nulla erat feugiat risus, ut ultricies velit ex eu odio. Cras aliquet euismod ipsum nec rutrum. Integer in lorem id ipsum gravida convallis."
        color="aviatr-purple-100"
      />
    </div>
  );
};
export default Events;
