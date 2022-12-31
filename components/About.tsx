import { motion } from "framer-motion";
import React from "react";

function About() {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                transition={{ duration: 1.2 }}
                src="https://matanyemini.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2022-12-31+14.35.07+-+3d+render+of+a+information+icon+in+the+real+space%2C++digital+art.png"
                alt="3D render of a cute tropical fish in an aquarium on a dark blue background, digital art"
            />

            <div className="space-y-10 ox-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[#F7AB0A]">little</span> background
                </h4>
            </div>
            <p className="text-base leading-8 pointer-events-none">
                I am Matan 👋, R&D leader with a track record of building products within tight timelines and budgets.
                Extremely results-oriented and proactive in addressing and resolving problems though cross-functional
                collaboration. I bring an extensive exprience in building embedded applications, distributed systems,
                and creating impact driven development culutre.
            </p>
        </div>
    );
}

export default About;
