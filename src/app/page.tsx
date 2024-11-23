import React from "react";
import HummingbirdHomepage from "@/components/home/Hummingbird";
import AboutAviat from "@/components/home/MissionStatement";
import Eagle from "@/components/home/Eagle";
import ProjectPuffin from "@/components/home/ProjectPuffin";
import HomePageCover from "@/components/home/HomePageCover";

const Home = () => {
  return (
    <div className="justify-center">
      <div className="mt-[-16%] md:mt-[-10%]">
        <HomePageCover />
      </div>
      <AboutAviat />
      <ProjectPuffin />
      <HummingbirdHomepage />
      <Eagle />
    </div>
  );
};

export default Home;
