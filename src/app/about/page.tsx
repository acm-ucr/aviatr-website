import React from "react";
import BoardMemberSection from "../../components/about/BoardMemberSection";
import WhoWeAre from "../../components/about/WhoWeAre";
import WhatWeDo from "../../components/about/WhatWeDo";

const Events = () => {
  return (
    <div className="flex flex-col gap-24">
      <WhoWeAre />
      <WhatWeDo />
      <BoardMemberSection />
    </div>
  );
};
export default Events;
