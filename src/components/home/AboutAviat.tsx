import Image from "next/image";
import Link from "next/link";
import ArrowImg from "@/public/home/Arrow.webp";
import Title from "@/components/Title";

const AboutAviat = () => {
  return (
    <div className="justify-center bg-black px-[8%] py-[5%] text-white">
      <div className="mb-[3%]">
        <Title
          title="What is Aviat'R?"
          width="w-[36%]"
          lineMarginShift="ml-[12%]"
          textSize="text-5xl"
        />
      </div>

      <div className="flex flex-col items-start gap-32 pt-8 md:flex-row">
        {/* Left side */}
        <div className="flex-shrink-0 md:w-1/4">
          <h2 className="font-outline-4 font-metrophobic text-6xl">
            MISSION<br></br>STATEMENT
          </h2>
        </div>

        {/* Right side */}
        <div className="md:w-3/4">
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

      <div className="mt-[4%] flex items-center justify-end">
        <Link href="#">
          <p className="mr-2 font-metrophobic text-2xl text-white hover:underline">
            LEARN MORE
          </p>
        </Link>
        <Image
          src={ArrowImg}
          alt="Arrow"
          width={50}
          height={20}
          className="ml-2 h-7 w-auto"
        />
      </div>
    </div>
  );
};

export default AboutAviat;
