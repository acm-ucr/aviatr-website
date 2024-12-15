import { AiOutlinePlus } from "react-icons/ai";
import reactHtmlParser from "html-react-parser";
import Image from "next/image";
import BMSLeftBorder from "@/../public/about/BMSLeftBorder.webp";
import BMSRightBorder from "@/../public/about/BMSRightBorder.webp";

import { motion } from "motion/react";

const animateScaleUp = {
  hidden: { opacity: 0, scale: 0, y: 100, rotateY: 150 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateY: 0,
    transition: { duration: 0.4 },
  },
  exit: { scale: 0, y: 600, opacity: 0, transition: { duration: 0.4 } },
};

const Modal = ({ event, setEvent }) => {
  return (
    <div
      className="fixed z-50 h-96 w-5/6 shadow-lg"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "20vh",
        width: "55vw",
      }}
    >
      <motion.div
        key="modal"
        className="font-russo z-50 mx-auto my-4 h-full rounded-lg border-4 text-white"
        style={{ background: "linear-gradient(to right, black, #72A8D1)" }}
        variants={animateScaleUp}
        transition={{ duration: 0.5 }}
        initial="hidden"
        whileInView="show"
        exit="exit"
      >
        <div className={`flex items-center justify-between`}>
          <p
            className={
              "m-0 translate-y-5 px-3 py-2 text-lg md:px-4 md:py-3 md:text-2xl"
            }
          >
            {event.summary}
          </p>

          <div className="px-12 py-3 md:px-12 md:text-2xl">
            {event.allDay
              ? "All Day"
              : new Date(event.start).toLocaleTimeString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                }) +
                " - " +
                new Date(event.end).toLocaleTimeString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
          </div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1, delay: 0 },
            }}
          >
            <AiOutlinePlus
              onClick={() => setEvent(null)}
              className="m-3 rotate-45 p-0 text-3xl duration-300 hover:scale-110 hover:cursor-pointer"
            />
          </motion.div>
        </div>
        <div className="p-3">
          <p className="m-0 px-4">{event.location}</p>

          <div className="p-2 px-4 text-sm md:text-lg">
            {event.description ? reactHtmlParser(event.description) : " "}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
