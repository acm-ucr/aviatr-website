"use client"
import React from "react";
import HummingBird from "@/components/projects/HummingBird";
import Eagle from "@/components/projects/Eagle";
import ProjectPuffin from "@/components/projects/ProjectPuffin";
import DividingLine from "@/components/projects/DividingLine";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="justify-center">
      <motion.h2
  initial={{ opacity: 0, y: 20, scale: 0.8 }}  // Start with smaller size and below
  animate={{ opacity: 1, y: 0, scale: 1 }}    // End with full opacity, normal position, and normal size
  transition={{ duration: 1, delay: 0.3 }}     // Add delay of 0.3 seconds
>
        <ProjectPuffin />
      </motion.h2>
      <DividingLine />
      <HummingBird />
      <DividingLine />
      <Eagle />
    </div>
  );
};
export default Projects;
