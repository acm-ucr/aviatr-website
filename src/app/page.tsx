import React from "react";
import HummingbirdHomepage from "@/components/home/HummingbirdHomepage";
import AboutAviat from "@/components/home/AboutAviat";
import Eagle from "@/components/home/Eagle";

const Home = () => {
  return (
    <div className="justify-center">
      <AboutAviat />
      <HummingbirdHomepage />
      <Eagle />
    </div>
  );
};

export default Home;
