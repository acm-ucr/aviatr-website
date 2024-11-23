import React from "react";
import Hummingbird from "@/components/projects/Hummingbird";
import Eagle from "@/components/projects/Eagle";
import ProjectPuffin from "@/components/projects/ProjectPuffin";
import DividingLine from "@/components/projects/DividingLine";

const Projects = () => {
  return (
    <div className="justify-center">
      <ProjectPuffin />
      <DividingLine />
      <Hummingbird />
      <DividingLine />
      <Eagle />
    </div>
  );
};
export default Projects;
