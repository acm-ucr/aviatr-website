import Image from "next/image";
import HummingBird3 from "@/images/home/hummingbird-image-3.webp";
import HummingBird2 from "@/images/home/hummingbird-image-2.webp";
import HummingBird1 from "@/images/home/hummingbird-image-1.webp";

const HummingbirdHomepage = () => {
  return (
    <div className="mx-[5%] mt-[8%] grid grid-cols-10">
      <div className="col-span-10 md:col-span-6">
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
        <p className="pb-10 text-center text-white">Title</p>
        <p className="mx-[10%] font-jost text-xs font-light leading-relaxed text-white md:mx-0 md:pl-[24%] lg:text-lg lg:font-normal 2xl:text-xl">
          Project Hummingbird is a research team aimed at improving existing
          systems or creating new processes and mechanisms to pioneer the
          future. With the current team aimed at improving drone swarm/show
          technology, among a number of other projects in the works, Hummingbird
          stands at the forefront to jump from flower to flower of knowledge.
        </p>
        <p className="ml-[10%] pt-10 text-white md:ml-0 md:pl-[24%]">button</p>
      </div>
    </div>
  );
};

export default HummingbirdHomepage;
