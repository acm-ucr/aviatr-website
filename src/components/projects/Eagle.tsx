"use client";
import Image from "next/image";
import EagleImg1 from "@/../public/projects/Eagle1.webp";
import EagleImg2 from "@/../public/projects/Eagle2.webp";
import EagleImg3 from "@/../public/projects/Eagle3.webp";
import ShiftedLineTitle from "@/components/ShiftedLineTitle";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Eagle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="mx-[8%] my-[5%] font-jost text-white">
      <div className="mb-[8%] sm:mb-[6%]">
        <ShiftedLineTitle
          title="Eagle"
          width="md:w-[180%]"
          textSize="sm:text-5xl"
          lineMarginShift="ml-[50%]"
        />
      </div>

      <div ref={ref}>
        <motion.div
          className="mb-[5%] grid grid-cols-3 gap-2 sm:gap-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerchildren: 0.2 } },
          }}
        >
          <motion.div
            className="col-span-2"
            variants={imageVariants}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={EagleImg1}
              alt="EagleImg1"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="grid grid-rows-2 gap-2 sm:gap-4">
            <motion.div
              className="h-full w-full"
              variants={imageVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={EagleImg2}
                alt="EagleImg2"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="h-full w-full"
              variants={imageVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src={EagleImg3}
                alt="EagleImg3"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
        <p className="text-md mx-[2%] mb-[5%] text-center font-jost sm:mb-0 sm:text-justify sm:text-xl">
          The Eagle Project is our competitive team dedicated to designing
          Unmanned Aerial Vehicles (UAVs) for global competitions. Participation
          in this team is reserved for upper-class members who have demonstrated
          exceptional dedication and commitment. Interested candidates should be
          aware that the competition entails time-sensitive assignments and
          strict deadlines. Due to limited space, priority will be given to
          members with high attendance records and those in Junior or Senior
          class levels. For more information about the SUAS competition, please
          visit the&nbsp;
          <Link
            href="https://suas-competition.org/"
            target="_blank"
            className="hover:cursor underline"
          >
            SUAS website
          </Link>
          . Even if you are not selected for the competition team the year you
          intended to, you will still be allowed to work alongside SUAS members
          through our other research projects like Hummingbird. For further
          questions feel free to ask board members via discord or email.
        </p>
      </div>
    </div>
  );
};

export default Eagle;
