import Image from "next/image";
import Cover from "@/images/home/homepagecover.webp";

const HomePageCover = () => {
  return (
    <div className="h-screen">
      <Image src={Cover} alt="Background image" layout="fill" />
    </div>
  );
};

export default HomePageCover;
