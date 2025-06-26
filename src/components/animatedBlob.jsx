import React from "react";
import { motion } from "framer-motion";

const AnimatedBlob = () => {
  return (
    <motion.div
      className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-gray-500 rounded-full mix-blend-normal filter blur-xl opacity-20 z-0"
      animate={{
        borderRadius: [
          "50% 50% 50% 50%",
          "60% 40% 70% 30%",
          "50% 60% 40% 60%",
          "40% 70% 30% 70%",
          "50% 50% 50% 50%",
        ],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default AnimatedBlob;
