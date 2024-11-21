import React from "react";
import Link from "next/link";
import CenteredLineTitle from "@/components/CenteredLineTitle";

const WhatWeDo = () => {
  return (
    <div className="mx-auto mb-10 flex h-1/4 w-4/5 flex-col md:mb-16 lg:w-3/5">
      <div className="flex justify-center">
        <CenteredLineTitle
          text="What We Do"
          textColor="text-aviatr-blue-500"
          lineColor="bg-aviatr-blue-500"
          lineWidth="w-[110%]"
        />
      </div>
      <div className="text-center font-jost text-sm leading-relaxed text-white sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
        As a drone enterprise conglomerate, we are dedicated to three distinct
        missions. Our first initiative, Project Puffin, focuses on novice
        training for first and second-year students, who will receive mentorship
        from senior club members. The second initiative, Project Hummingbird,
        serves as our drone show and swarming research division, where we create
        stunning aerial displays. Finally, Project Eagle is our elite SUAS
        competition team, tasked with building a drone from the ground up to
        execute advanced autonomous tasks for the national SUAS competition. We
        look forward to getting to know you better and hope you will join us
        soon. If you're interested in becoming a part of our team, please visit
        our recruitment survey&nbsp;
        <Link href="#" className="hover:cursor underline">
          here
        </Link>
        .
      </div>
    </div>
  );
};

export default WhatWeDo;
