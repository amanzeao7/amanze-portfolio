import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amanze Alexander Anyiam-Osigwe — Full Stack Developer</title>
        <meta name="description" content="Amanze — Full Stack Software Developer. Turning ideas into seamless digital experiences." />
      </Head>
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen max-w-4xl mx-auto px-6">
        <Header />
        <main className="mt-12 space-y-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
      
    </>
  );
}
