import React from "react";
import HummingBird from "@/components/projects/HummingBird";
import Eagle from "@/components/projects/Eagle";
import ProjectPuffin from "@/components/projects/ProjectPuffin";

const Projects = () => {
  return (
    <div className="justify-center">
      <ProjectPuffin />
      <HummingBird />
      <Eagle />
    </div>
  );
};
export default Projects;
