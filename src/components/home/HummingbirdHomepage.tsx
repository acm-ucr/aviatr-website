import Image from "next/image";
import HummingBird3 from "@/../public/images/home/hummingbird-image-3.webp";
import HummingBird2 from "@/../public/images/home/hummingbird-image-2.webp";
import HummingBird1 from "@/../public/images/home/hummingbird-image-1.webp";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";
import LearnMoreButton from "./LearnMoreButton";

const HummingbirdHomepage = () => {
  return (
    <div className="mx-[5%] mt-[8%] grid grid-cols-10">
      <div className="col-span-10 lg:col-span-6">
        <Image
          src={HummingBird1}
          alt="Front View of Drone"
          className="w-full pb-[2%]"
          width={754}
          height={311}
        />
        <div className="grid grid-cols-8">
          <div className="col-span-3">
            <Image
              src={HummingBird2}
              alt="Rudder of Drone"
              className="h-full w-full"
              width={294}
              height={363}
            />
          </div>
          <div className="col-span-5">
            <Image
              src={HummingBird3}
              alt="Side View of Drone"
              className="w-full pl-[3%]"
              width={444}
              height={363}
            />
          </div>
        </div>
      </div>

      <div className="col-span-10 grid content-center md:col-span-4">
        <div className="mb-[7%] ml-[4%] mt-[6%] sm:ml-0 md:mb-[12%] lg:ml-[14%] lg:mt-0">
          <ShiftedLineTitle
            title="Hummingbird"
            width="md:w-[90%]"
            textSize="lg:text-5xl"
            lineMarginShift="ml-[30%]"
          />
        </div>
        <div className="text-md mx-[10%] flex flex-col gap-8 font-jost leading-relaxed text-white sm:text-xl md:mx-0 md:pl-[18%]">
          <p>
            Project Hummingbird is a research team aimed at improving existing
            systems or creating new processes and mechanisms to pioneer the
            future. With the current team aimed at improving drone swarm/show
            technology, among a number of other projects in the works,
            Hummingbird stands at the forefront to jump from flower to flower of
            knowledge.
          </p>
          <LearnMoreButton color="bg-aviatr-purple-100" link="/projects" />
        </div>
      </div>
    </div>
  );
};

export default HummingbirdHomepage;
