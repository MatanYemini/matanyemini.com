import { motion } from "framer-motion";
import React from "react";

function About() {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <div className="hidden md:block absolute top-24 justify-center">
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            </div>

            <motion.div className="flex flex-col h-[80vh] text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
                <div className="space-y-10 px-0 md:px-10">
                    <h4 className="text-4xl font-semibold">
                        Here is a <span className="underline decoration-[#F7AB0A]">little</span> background
                    </h4>
                </div>
                <p className="text-base leading-8 md:text-2xl md:leading-10 pointer-events-none">
                    Hi, I’m Matan 👋 – an R&D Leader who passionately solves problems and builds products people love. I
                    deliver innovative solutions on time and on budget, build global high-performing teams, and foster
                    an impact-driven culture. Currently driving innovation at Engageli.
                </p>
            </motion.div>
        </div>
    );
}

export default About;
