"use client";
import React from "react";
import HummingBird from "@/components/projects/HummingBird";
import Eagle from "@/components/projects/Eagle";
import ProjectPuffin from "@/components/projects/ProjectPuffin";
import DividingLine from "@/components/projects/DividingLine";
const Projects = () => {
  return (
    <div className="justify-center">
      <ProjectPuffin />
      <DividingLine />
      <HummingBird />
      <DividingLine />
      <Eagle />
    </div>
  );
};
export default Projects;
