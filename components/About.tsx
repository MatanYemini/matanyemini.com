import { motion } from "framer-motion";
import React from "react";

function About() {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <div className="md:hidden absolute top-16 justify-center">
                <h3 className="uppercase tracking-[15px] text-gray-500 text-xl">About</h3>
            </div>
            <div className="hidden md:block absolute top-24 justify-center">
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            </div>

            <motion.div className="flex flex-col h-[80vh] text-center md:text-left max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center">
                <div className="space-y-6 md:space-y-10 px-0 md:px-10 mt-12 md:mt-0">
                    <h4 className="text-2xl md:text-4xl font-semibold">
                        Here is a <span className="underline decoration-[#F7AB0A]">little</span> background
                    </h4>
                </div>
                <p className="text-sm leading-6 md:text-2xl md:leading-10 max-w-full md:max-w-none px-4 md:px-0 pointer-events-none">
                    Hi, I’m Matan Yemini 👋 – an R&D Leader and GenAI enthusiast who genuinely enjoys solving tricky
                    problems and building products people actually want to use. I’ve spent plenty of late nights diving
                    into Large Language Models (LLMs), video-audio streaming, cybersecurity puzzles, embedded systems,
                    and web development—because, let’s face it, that’s what happens when you’re curious (and slightly
                    obsessed). I strive to turn ambitious AI ideas into practical, secure solutions—usually on time and
                    almost always on budget. Along the way, I’ve been lucky enough to build some fantastic, globally
                    distributed teams and nurture a culture where making a real impact matters more than buzzwords or
                    PowerPoint slides. Currently, I’m exploring the future of digital engagement at Engageli, happily
                    geeking out with cutting-edge tech while trying not to take myself too seriously.
                </p>
            </motion.div>
        </div>
    );
}

export default About;
