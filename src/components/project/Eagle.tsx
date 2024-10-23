import Image from "next/image";
import EagleImg1 from "@/public/project/Eagle1.webp";
import EagleImg2 from "@/public/project/Eagle2.webp";
import EagleImg3 from "@/public/project/Eagle3.webp";
// public\project\Eagle1.webp

const Eagle = () => {
  return (
    <div className="justify-center bg-black px-[8%] py-[5%] text-white">
      <h1 className="font-metrophobic text-4xl font-bold">Eagle</h1>
      <div className="mb-6 ml-8 w-1/4 border-b-2 border-white p-1"></div>

      <div className="grid grid-cols-3 gap-4 py-8">
        <div className="col-span-2">
          <Image
            src={EagleImg1}
            alt="EagleImg1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <Image
            src={EagleImg2}
            alt="EagleImg2"
            className="h-full w-full object-cover"
          />
          <Image
            src={EagleImg3}
            alt="EagleImg3"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="pl-5 text-justify font-jost text-xl leading-relaxed">
        <p>
          The Eagle Project is our competitive team dedicated to designing
          Unmanned Aerial Vehicles (UAVs) for global competitions. Participation
          in this team is reserved for upper-class members who have demonstrated
          exceptional dedication and commitment. Interested candidates should be
          aware that the competition entails time-sensitive assignments and
          strict deadlines. Due to limited space, priority will be given to
          members with high attendance records and those in Junior or Senior
          class levels. For more information about the SUAS competition, please
          visit the SUAS website: https://suas-competition.org/. Even if you are
          not selected for the competition team the year you intended to, you
          will still be allowed to work alongside SUAS members through our other
          research projects like Hummingbird. For further questions feel free to
          ask board members via discord or email.
        </p>
      </div>
    </div>
  );
};
export default Eagle;
