import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
    return (
        <header className="sticky top-0 p-3 md:p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon
                    url="https://www.linkedin.com/in/matan-yemini"
                    fgColor="gray"
                    bgColor="transparent"
                    style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                    url="https://github.com/MatanYemini"
                    fgColor="gray"
                    bgColor="transparent"
                    style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                    url="https://medium.com/@Matan-Yemini"
                    fgColor="gray"
                    bgColor="transparent"
                    style={{ height: 40, width: 40 }}
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className="flex flex-row items-center cursor-pointer text-gray-300"
            >
                <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
                <Link href="#contact">
                    <button className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</button>
                </Link>
            </motion.div>
        </header>
    );
}

export default Header;
