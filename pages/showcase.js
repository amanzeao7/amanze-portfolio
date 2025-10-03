import Head from "next/head";
import Header from "../components/Header";
import ShowcaseContent from "../components/ShowcaseContent";

export default function Showcase() {
  return (
    <>
      <Head>
        <title>Whisky Showcase | Amanze Portfolio</title>
        <meta
          name="description"
          content="Interactive Whisky Showcase built with React & Next.js"
        />
      </Head>

      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen w-full">
        <Header />

        <main className="pt-24 max-w-6xl mx-auto px-6">
          <ShowcaseContent />
        </main>
      </div>
    </>
  );
}
