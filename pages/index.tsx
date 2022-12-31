import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ContactMe from "../components/ContactMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Matan Yemini</title>
                <meta name="description" content="Matan Yemini - Software & Product" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="overflow-x-hidden bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
                <Header />

                {/* Hero */}
                <section id="hero" className="snap-start">
                    <Hero />
                </section>

                {/* About */}
                <section id="about" className="snap-center">
                    <About />
                </section>

                {/* Contact */}
                <section id="contact" className="snap-start">
                    <ContactMe />
                </section>
            </main>
        </>
    );
}
