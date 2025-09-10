import { useState } from "react";

export default function DemoCounter() {
  const [count, setCount] = useState(0);
  return (
     <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg">
    <div className="p-4 border rounded bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <p>Interactive Counter: {count}</p>
      <button
        className="px-3 py-1 mt-2 bg-brand text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
    </div>
    </div>
  );
}
