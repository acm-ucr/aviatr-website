import { motion } from "motion/react";

const CustomEvent = ({ event }) => {
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.1, delay: 0 },
        }}
      >
        <style>
          {`
            .responsive-font {
              font-size: 7px;
            }

            @media (min-width: 640px) {
              .responsive-font {
                font-size: 7px;
              }
            }

            @media (min-width: 768px) {
              .responsive-font {
                font-size: 12px;
              }
            }
          `}
        </style>

        <div
          className="responsive-font mx-auto w-5/6 overflow-hidden text-ellipsis px-2 font-jost"
          style={{
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          {event.summary}
        </div>
      </motion.div>
    </>
  );
};

export default CustomEvent;
