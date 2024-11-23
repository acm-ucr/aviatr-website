import Link from "next/link";
import { MoveRight } from "lucide-react";

const LearnMoreButton = ({ color, link }: { color: string; link: string }) => {
  return (
    <div className="flex items-center gap-3">
      <Link href={`${link}`}>
        <p className="mr-2 whitespace-nowrap font-metrophobic text-xl text-white hover:underline md:text-2xl">
          LEARN MORE
        </p>
      </Link>
      <div
        className={`flex min-h-8 min-w-8 items-center justify-center rounded-full ${color}`}
      >
        <MoveRight color="black" size={24} className="w-[60%] md:w-full" />
      </div>
    </div>
  );
};

export default LearnMoreButton;
