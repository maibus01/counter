import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Use environment variable for backend URL
  const BASE_URL = process.env.REACT_APP_API_URL;

  // Fetch the current counter from backend
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch(`${BASE_URL}/counter`);
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };

    fetchCount();
  }, [BASE_URL]); // ✅ BASE_URL added to dependencies

  // Update counter on backend
  const updateCount = async (value) => {
    try {
      const response = await fetch(`${BASE_URL}/counter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: value }),
      });
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error("Error updating count:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => updateCount(count + 1)}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => updateCount(count - 1)}
        >
          -
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => updateCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
