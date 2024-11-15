import Link from "next/link";
import { MoveRight } from "lucide-react";

const LearnMoreButton = ({ color }: { color: string }) => {
  return (
    <div className="flex gap-3">
      <Link href="#">
        <p className="mr-2 font-metrophobic text-2xl text-white hover:underline">
          LEARN MORE
        </p>
      </Link>
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}
      >
        <MoveRight color="black" size={24} />
      </div>
    </div>
  );
};

export default LearnMoreButton;
