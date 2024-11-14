import React from "react";
import HummingbirdHomepage from "@/components/home/HummingbirdHomepage";
import AboutAviat from "@/components/home/MissionStatement";
import Eagle from "@/components/home/Eagle";
import ProjectPuffin from "@/components/home/PuffinHomePageContent";
import HomePageCover from "@/components/home/HomePageCover";

const Home = () => {
  return (
    <div className="justify-center">
      <HomePageCover />
      <AboutAviat />
      <ProjectPuffin />
      <HummingbirdHomepage />
      <Eagle />
    </div>
  );
};

export default Home;
