import React from "react";
import HummingbirdHomepage from "@/components/home/HummingbirdHomepage";
import AboutAviat from "@/components/home/MissionStatement";
import Eagle from "@/components/home/Eagle";
import ProjectPuffin from "@/components/home/PuffinHomePageContent";

const Home = () => {
  return (
    <div className="justify-center">
      <AboutAviat />
      <ProjectPuffin />
      <HummingbirdHomepage />
      <Eagle />
    </div>
  );
};

export default Home;
