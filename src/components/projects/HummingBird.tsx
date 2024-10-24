import Image from "next/image";
import HummingBirdImg from "@/public/projects/HummingBird.webp";

const HummingBird = () => {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-[8%] px-[8%] py-[5%] text-white md:flex-row md:items-center">
      {/* left */}
      <div className="md:w-2/4">
        <h1 className="font-metrophobic text-4xl font-bold">HummingBird</h1>
        <div className="mb-6 ml-8 w-1/4 border-b-2 border-white p-2"></div>

        <p className="px-4 text-justify font-jost text-xl leading-relaxed">
          The Hummingbird project is a research division within the Aviat'R
          enterprise focused on developing drone swarming technology and
          multi-drone networks. Our objective is to create a functional drone
          presentation system capable of performing intricate drone shows. These
          shows can be utilized for fundraising and special events, generating
          revenue to support our team’s ambitious projects. We strive to push
          the boundaries of innovation by designing a sustainable and
          energy-efficient drone swarm, which will enhance our understanding of
          navigation and aerial device networks.
        </p>
      </div>

      {/* right */}
      <div className="md:w-2/4">
        <div className="relative flex">
          <Image
            src={HummingBirdImg}
            alt="HummingBirdImg"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default HummingBird;
