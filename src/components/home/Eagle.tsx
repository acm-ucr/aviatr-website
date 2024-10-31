import Image from "next/image";
import EagleImg from "@/images/home/Eagle.webp";

const Eagle = () => {
  return (
    <div className="mt-[8%] flex w-full flex-col items-start justify-between pl-[8%] pt-8 text-white md:flex-row md:items-center">
      {/* left side */}
      <div className="md:w-2/6">
        <h1 className="font-metrophobic text-4xl font-bold">Eagle</h1>
        <div className="mb-6 ml-8 w-1/4 border-b-2 border-white p-2"></div>

        <p className="px-4 font-jost text-xl leading-relaxed">
          Eagle is a select team that competes with universities in the nation
          and make Aviat’R’s name known. It participates in SUAS, a competition
          aimed at challenging students to make their own unmanned aerial
          systems to complete a specific task. This sparks innovation from
          competition and poses as one of the largest motivations for
          improvement in the student world.
        </p>
      </div>

      {/* right side */}
      <div className="clip-slope relative flex h-[800px] overflow-hidden">
        <Image
          src={EagleImg}
          alt="Eagle"
          width={914}
          height={800}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Eagle;
