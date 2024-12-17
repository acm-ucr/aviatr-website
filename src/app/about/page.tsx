"use client";
import React, { useEffect } from "react";
import BoardMemberSection from "../../components/about/BoardMemberSection";
import WhoWeAre from "../../components/about/WhoWeAre";
import WhatWeDo from "../../components/about/WhatWeDo";
import RecurringLogo from "@/components/RecurringLogo";

const Events = () => {
  useEffect(() => {
    const hash = window.location.hash; // returns the hash in the url #..
    if (hash) {
      const section = document.querySelector(hash); // returns the first element identified by the hash, < id="#..">...</>
      if (section instanceof HTMLElement) {
        window.scrollTo({
          top: section.offsetTop - 150,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <div>
      <div>
        <RecurringLogo />
      </div>
      <div className="flex flex-col items-center gap-24">
        <WhoWeAre />
        <WhatWeDo />
      </div>
      <div id="board" className="pt-24">
        <BoardMemberSection />
      </div>
    </div>
  );
};
export default Events;
