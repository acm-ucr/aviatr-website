import Image from "next/image";

const AboutAviat = () => {
  return (
    <div className="justify-center bg-black px-[15%] py-[5%] text-white">
      <h1 className="font-metrophobic text-4xl">What is Aviat'R? </h1>
      <div className="mb-6 ml-8 w-1/4 border-b-2 border-white p-1"></div>

      <div className="flex flex-col items-start gap-20 pt-8 md:flex-row md:items-center">
        {/* Left side */}
        <div className="flex-shrink-0 md:w-1/4">
          <h2 className="font-metrophobic text-5xl font-bold">
            MISSION<br></br>STATEMENT
          </h2>
        </div>

        {/* Right side */}
        <div className="md:w-3/4">
          <p className="text-md font-jost leading-relaxed">
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
        <a href="#" className="text-md font-sans text-white hover:underline">
          LEARN MORE
        </a>

        <div className="ml-2 flex items-center">
          <a href="#">
            <Image
              src="/Images/Arrow-1.webp"
              alt="Arrow"
              width={50}
              height={20}
              className="h-6 w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutAviat;
