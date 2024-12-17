"use client";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";

const LearnMoreButton = ({ color, link }: { color: string; link: string }) => {
  return (
    <Link href={`${link}`}>
      <motion.div
        className="mr-2 flex flex-row gap-3 whitespace-nowrap font-metrophobic text-xl text-white hover:underline md:text-2xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        LEARN MORE
        <div
          className={`flex h-7 min-h-7 w-7 min-w-7 items-center justify-center rounded-full md:h-8 md:w-8 ${color}`}
        >
          <MoveRight color="black" size={24} />
        </div>
      </motion.div>
    </Link>
  );
};

export default LearnMoreButton;
