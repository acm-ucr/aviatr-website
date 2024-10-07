// import React from 'react';
// import Link from 'next/link';

const AboutAviat = () => {
  return (
    <div className="justify-center bg-black px-60 py-16 text-white">
      <h1 className="font-sans text-3xl font-thin">What is Aviat'R? </h1>
      <div className="mb-6 ml-8 w-1/4 border-b-2 border-white p-1"></div>

      <div className="flex flex-col items-start gap-20 pt-8 md:flex-row md:items-center">
        {/* Left side */}
        <div className="flex-shrink-0 md:w-1/4">
          <h2 className="font-sans text-5xl font-bold">
            MISSION<br></br>STATEMENT
          </h2>
        </div>

        {/* Right side */}
        <div className="md:w-3/4">
          <p className="text-md font-sans font-thin leading-relaxed">
            At Aviat'R, our mission is to empower students with the knowledge,
            skills, and facilities required to fuel their love for aeronautics.
            We strive to pioneer new Unmanned Aerial Systems that encapsulate
            “tomorrow” and compete for the top among other universities. We are
            dedicated to the craft of UAS and will make our mark on the world.
            Our commitment to excellence, edgenuity, and intelligence drives us
            to continuously innovate and lead the way in new and improved
            systems.
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end">
        <span className="text-md font-sans">LEARN MORE</span>
        <div className="ml-2 flex items-center">
          <div className="w-60 border-t-2 border-white"></div>
        </div>
        <span className="pb-1 font-sans text-4xl"> &gt; </span>
      </div>
    </div>
  );
};

export default AboutAviat;
