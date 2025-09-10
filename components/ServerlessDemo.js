import { useState } from "react";

export default function ServerlessDemo() {
  const [joke, setJoke] = useState("");

  async function getJoke() {
    const res = await fetch("/api/joke");
    const data = await res.json();
    setJoke(data.joke);
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Serverless Demo</h4>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Click the button to get a random joke from a Next.js API route.</p>
      <button
        onClick={getJoke}
        className="mt-3 px-3 py-1 bg-brand text-white rounded"
      >
        Get Joke
      </button>
      {joke && <p className="mt-2 text-gray-800 dark:text-gray-100">{joke}</p>}
    </div>
  );
}
