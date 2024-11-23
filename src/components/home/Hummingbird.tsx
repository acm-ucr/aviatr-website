"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HummingBird3 from "@/../public/home/hummingbird-image-3.webp";
import HummingBird2 from "@/../public/home/hummingbird-image-2.webp";
import HummingBird1 from "@/../public/home/hummingbird-image-1.webp";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";
import LearnMoreButton from "./LearnMoreButton";

const HummingbirdHomepage = () => {
  const [isMobile, setIsMobile] = useState<true | false | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="mx-[5%] mt-[18%] grid grid-cols-10">
          <div className="col-span-10 grid content-center">
            <div className="mb-[7%] ml-[4%] sm:ml-0">
              <ShiftedLineTitle
                title="Hummingbird"
                width="md:w-[90%]"
                lineMarginShift="ml-[20%]"
              />
            </div>

            <div className="col-span-10">
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

            <div className="text-md mx-[10%] mt-[8%] flex flex-col gap-8 font-jost leading-relaxed text-white sm:text-xl lg:mx-0 lg:pl-[10%]">
              <p>
                Project Hummingbird is a research team aimed at improving
                existing systems or creating new processes and mechanisms to
                pioneer the future. With the current team aimed at improving
                drone swarm/show technology, among a number of other projects in
                the works, Hummingbird stands at the forefront to jump from
                flower to flower of knowledge.
              </p>
              <LearnMoreButton color="bg-aviatr-purple-100" link="/projects" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-[5%] mt-[12%] grid grid-cols-10">
          <div className="col-span-5 self-center lg:col-span-6">
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

          <div className="col-span-5 ml-[12%] grid content-center lg:col-span-4 lg:ml-0">
            <div className="mb-[8%] mt-[6%] lg:mb-[12%] lg:ml-[14%] lg:mt-0">
              <ShiftedLineTitle
                title="Hummingbird"
                width="md:w-[90%]"
                textSize="lg:text-4xl xl:text-5xl"
                lineMarginShift="xl:ml-[30%] ml-[20%]"
              />
            </div>
            <div className="text-md mx-[6%] flex flex-col gap-8 pl-0 font-jost text-lg leading-relaxed text-white lg:mx-0 lg:pl-[10%] lg:text-xl">
              <p>
                Project Hummingbird is a research team aimed at improving
                existing systems or creating new processes and mechanisms to
                pioneer the future. With the current team aimed at improving
                drone swarm/show technology, among a number of other projects in
                the works, Hummingbird stands at the forefront to jump from
                flower to flower of knowledge.
              </p>
              <LearnMoreButton color="bg-aviatr-purple-100" link="/projects" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HummingbirdHomepage;
