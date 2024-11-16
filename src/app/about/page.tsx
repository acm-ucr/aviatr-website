import React from "react";
import BoardMemberSection from "../../components/about/BoardMemberSection";
import WhoWeAre from "../../components/about/WhoWeAre";
import WhatWeDo from "../../components/about/WhatWeDo";
import RecurringLogo from "@/components/RecurringLogo";
import MemberDetail from "@/components/MemberDetail";

const Events = () => {
  return (
    <div>
      <div className="p-16">
        <RecurringLogo />
      </div>
      <div className="flex flex-col gap-24 items-center">
        <WhoWeAre />
        <WhatWeDo />
        <BoardMemberSection />
        <MemberDetail
          hobby="Hobby"
          major="Major"
          year="Year"
          description="DescriptionDescriptionDescriptionDescriptionDeriptionDescriptioescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription"
        />
      </div>
    </div>
  );
};
export default Events;
