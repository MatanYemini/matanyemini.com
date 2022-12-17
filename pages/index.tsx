import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Matan Yemini</title>
        <meta name="description" content="Matan Yemini" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />

        {/* Hero */}
        <section id="hero">
          <Hero />
        </section>
        {/* About */}

        {/* projects / posts */}

        {/* Contact */}
      </main>
    </>
  );
}
