import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Matan Yemini</title>
                <meta name="description" content="Matan Yemini - Software and Product" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Matan Yemini,Software,Product,Startups" />
                <meta property="og:title" content="Matan Yemini" />
                <meta property="og:description" content="Matan Yemini - Software and Product" />
                <meta property="og:image" content="https://d2ldb6hpndi77k.cloudfront.net/Matan_headshot.jpg" />
                <meta name="google-site-verification" content="MQkqrrrRxNbHOt3n5AdYdjlx0-oVOhQBuvfe5pDGmpA" />
                <link rel="canonical" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script id="google-analytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>

            <article
                itemScope
                itemType="https://schema.org/Article"
                className="overflow-x-hidden overflow-y-auto bg-[#242424] text-white h-screen snap-y snap-mandatory z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
            >
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
            </article>
        </>
    );
}
