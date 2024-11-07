import Image from "next/image";
import Link from "next/link";
import ArrowImg from "@/images/home/Arrow.webp";
import Title from "@/components/Title";

const MissionStatement = () => {
  return (
    <div className="justify-center bg-black px-[8%] pt-[5%] text-white">
      <div className="mb-[3%]">
        <div className="max-400px:hidden">
          <Title
            title="What is Aviat'R?"
            width="w-[36%]"
            lineMarginShift="ml-[12%]"
            textSize="text-5xl"
          />
        </div>
        <div className="min-400px:hidden">
          <Title
            title="What is Aviat'R?"
            width="w-[36%]"
            lineMarginShift="ml-[12%]"
            textSize="text-[44px]"
          />
        </div>
      </div>

      <div className="md:gap-10 xl:flex-row xl:gap-32 flex flex-col items-start gap-5 pt-8">
        {/* Left side */}
        <div className="xl:w-1/4 flex-shrink-0">
          <h2 className="font-outline-4 min-[400px]:text-6xl font-metrophobic text-5xl">
            MISSION<br></br>STATEMENT
          </h2>
        </div>

        {/* Right side */}
        <div className="xl:w-3/4">
          <p className="text-justify font-jost text-xl leading-relaxed">
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
          <p className="max-[400px]:w-[30%] sm:mr-2 font-metrophobic text-2xl text-white hover:underline">
            LEARN MORE
          </p>
        </Link>
        <div className="max-500px:hidden">
          <Image
            src={ArrowImg}
            alt="Arrow"
            width={50}
            height={20}
            className="ml-2 h-7 w-auto"
          />
        </div>
        <div className="min-500px:hidden">
          <Image
            src={ArrowImg}
            alt="Arrow"
            width={50}
            height={20}
            className="ml-2 w-[94%]"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
