import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
    const [text, _count] = useTypewriter({
        words: ["Matan Yemini", "R&D Director"],
        loop: true,
        delaySpeed: 1500,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Image
                src="https://d2ldb6hpndi77k.cloudfront.net/Matan_headshot.jpg"
                alt="Matan Yemini's Picture"
                priority
                width="0"
                height="0"
                sizes="100vw"
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">Software & Product</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#contact">
                        <button className="heroButton">Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
