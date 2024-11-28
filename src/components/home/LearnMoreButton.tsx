"use client";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";

const LearnMoreButton = ({ color, link }: { color: string; link: string }) => {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Link href={`${link}`}>
        <motion.p
          className="mr-2 whitespace-nowrap font-metrophobic text-xl text-white hover:underline md:text-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LEARN MORE
        </motion.p>
      </Link>
      <div
        className={`flex min-h-7 min-w-7 items-center justify-center rounded-full ${color}`}
      >
        <MoveRight color="black" size={24} className="w-[60%] md:w-full" />
      </div>
    </div>
  );
};

export default LearnMoreButton;
