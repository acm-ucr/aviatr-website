import React from "react";

const ProjectPuffin = () => {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75"
        style={{ backgroundImage: "url" }}
      ></div>
      <div className="relative z-10 flex max-w-3xl flex-col items-start p-8">
        <h1 className="mb-4 text-5xl font-bold">Project Puffin</h1>
        <p className="mb-6 text-lg">
          Project Puffin aims at giving those interested in but without a
          background in aeronautics the general know-how of drones. By the end
          of the 2 unit class, students will be able to assemble their own
          drones and understand the parts and basic theory behind them.
        </p>
        <a
          href="#"
          className="flex items-center text-lg font-semibold text-pink-500 hover:text-pink-400"
        >
          Learn More
          <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.293 2.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L13 4.414V16a1 1 0 11-2 0V4.414L7.707 9.707a1 1 0 01-1.414-1.414l6-6z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectPuffin;
