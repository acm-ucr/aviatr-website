import React from "react";
import BoardMemberSection from "../../components/about/BoardMemberSection";
import WhoWeAre from "../../components/about/WhoWeAre";
import WhatWeDo from "../../components/about/WhatWeDo";
import RecurringLogo from "@/components/RecurringLogo";

const Events = () => {
  return (
    <div>
      <div>
        <RecurringLogo />
      </div>
      <div className="flex flex-col items-center gap-24">
        <WhoWeAre />
        <WhatWeDo />
        <BoardMemberSection />
      </div>
    </div>
  );
};
export default Events;
