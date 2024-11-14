import Image from "next/image";
import Link from "next/link";
import ArrowImg from "@/images/home/Arrow.webp";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";

const MissionStatement = () => {
  return (
    <div className="justify-center bg-black px-[8%] pt-[5%] text-white">
      <div className="sm:mb-[3%]">
        <ShiftedLineTitle
          title="What is Aviat'R?"
          width="md:w-[120%]" // default: w-[60%]
          lineMarginShift="ml-[28%]"
          textSize="sm:text-5xl" // default: text-xl
        />
      </div>

      <div className="flex flex-col items-start gap-5 pt-8 md:gap-10 xl:flex-row xl:gap-32">
        {/* Left side */}
        <div className="flex-shrink-0 xl:w-1/4">
          <h2 className="font-outline-2 sm:font-outline-4 font-metrophobic text-4xl sm:text-5xl">
            MISSION<br></br>STATEMENT
          </h2>
        </div>

        {/* Right side */}
        <div className="xl:w-3/4">
          <p className="font-jost text-xs leading-relaxed text-white sm:text-xl">
            At Aviat'R, our mission is to empower students with the knowledge,
            skills, and facilities required to fuel their love for aeronautics.
            We strive to pioneer new Unmanned Aerial Systems that encapsulate
            “tomorrow” and compete for the top among other universities. We are
            dedicated to the craft of UAS and will make our mark on the world.
            Our commitment to excellence, edgenuity, and intelligence drives us
            to continuously innovate and lead the way in new and improved
            systems.
          </p>
        </div>
      </div>

      <div className="mt-[4%] flex items-center justify-end overflow-hidden">
        <Link href="#">
          <p className="text-nowrap font-metrophobic text-sm leading-tight text-white hover:underline sm:mr-2 sm:text-2xl sm:leading-normal">
            LEARN MORE
          </p>
        </Link>
        <div>
          <Image
            src={ArrowImg}
            alt="Arrow"
            width={50}
            height={20}
            className="ml-2 h-auto w-[60%] sm:h-7 sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
