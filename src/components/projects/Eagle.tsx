import Image from "next/image";
import EagleImg1 from "@/images/projects/Eagle1.webp";
import EagleImg2 from "@/images/projects/Eagle2.webp";
import EagleImg3 from "@/images/projects/Eagle3.webp";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";
import Link from "next/link";

const Eagle = () => {
  return (
    <div className="mx-[8%] my-[5%] font-jost text-white">
      <div className="mb-[8%] sm:mb-[6%]">
        <ShiftedLineTitle
          title="Eagle"
          width="md:w-[180%]"
          textSize="sm:text-5xl"
          lineMarginShift="ml-[50%]"
        />
      </div>

      <div>
        <div className="mb-[5%] grid grid-cols-3 gap-2 sm:gap-4">
          <div className="col-span-2">
            <Image
              src={EagleImg1}
              alt="EagleImg1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-2 sm:gap-4">
            <Image
              src={EagleImg2}
              alt="EagleImg2"
              className="h-full w-full object-cover"
            />
            <Image
              src={EagleImg3}
              alt="EagleImg3"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <p className="text-md mx-[2%] mb-[5%] text-center font-jost sm:mb-0 sm:text-justify sm:text-xl">
          The Eagle Project is our competitive team dedicated to designing
          Unmanned Aerial Vehicles (UAVs) for global competitions. Participation
          in this team is reserved for upper-class members who have demonstrated
          exceptional dedication and commitment. Interested candidates should be
          aware that the competition entails time-sensitive assignments and
          strict deadlines. Due to limited space, priority will be given to
          members with high attendance records and those in Junior or Senior
          class levels. For more information about the SUAS competition, please
          visit the &nbsp;
          <Link
            href="https://suas-competition.org/"
            target="_blank"
            className="hover:cursor underline"
          >
            SUAS website
          </Link>
          . Even if you are not selected for the competition team the year you
          intended to, you will still be allowed to work alongside SUAS members
          through our other research projects like Hummingbird. For further
          questions feel free to ask board members via discord or email.
        </p>
      </div>
    </div>
  );
};

export default Eagle;
