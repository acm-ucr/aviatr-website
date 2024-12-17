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

      <div id="hummingBird" className="w-full">
        <DividingLine />
      </div>

      <div className="w-full pt-14">
        <HummingBird />
      </div>
      <div id="eagle" className="w-full">
        <DividingLine />
      </div>

      <div className="w-full pt-14">
        <Eagle />
      </div>
    </div>
  );
};
export default Projects;
