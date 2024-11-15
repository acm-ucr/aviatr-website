import Image from "next/image";
import Cover from "@/images/home/homepagecover.webp";

const HomePageCover = () => {
  return (
    <div className="h-screen">
      <Image src={Cover} alt="Background image" className="h-auto w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HomePageCover;
