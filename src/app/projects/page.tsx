"use client";
import React, { useEffect } from "react";
import HummingBird from "@/components/projects/HummingBird";
import Eagle from "@/components/projects/Eagle";
import ProjectPuffin from "@/components/projects/ProjectPuffin";
import DividingLine from "@/components/projects/DividingLine";

const Projects = () => {
  // useEffect(() => {
  //   const hash = window.location.hash; // returns the hash in the url #..
  //   if (hash) {
  //     const section = document.querySelector(hash); // returns the first element identified by the hash, < id="#..">...</>
  //     if (section instanceof HTMLElement) {
  //       window.scrollTo({
  //         top: section.offsetTop - 150,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // }, []);

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
