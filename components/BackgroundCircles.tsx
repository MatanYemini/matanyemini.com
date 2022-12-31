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
            <div className="absolute border border-[#333333] rounded-full h-48 w-48 mt-52 animate-ping" />
            <div className="absolute border border-[#333333] rounded-full h-64 w-64 mt-52 " />
            <div className="absolute border border-[#333333] rounded-full h-96 w-96 mt-52 " />
            <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[600px] w-[600px] mt-52 animate-pulse absolute" />
        </motion.div>
    );
};

export default BackgroundCircles;
