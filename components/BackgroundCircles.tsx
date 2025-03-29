import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
                duration: 2.5,
            }}
            className="relative flex justify-center items-center"
        >
            <div className="absolute border border-[#333333] rounded-full h-32 w-32 md:h-48 md:w-48 mt-52 animate-ping" />
            <div className="absolute border border-[#333333] rounded-full h-48 w-48 md:h-64 md:w-64 mt-52 " />
            <div className="absolute border border-[#333333] rounded-full h-72 w-72 md:h-96 md:w-96 mt-52 " />
            <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[400px] w-[400px] md:h-[600px] md:w-[600px] mt-52 animate-pulse absolute" />
        </motion.div>
    );
};

export default BackgroundCircles;
