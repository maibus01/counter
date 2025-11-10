import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  
  useEffect(() => {
    fetch(`${BASE_URL}/api/count`)
      .then(res => res.json())
      .then(data => setCount(data.count));
  }, []);

  const updateCount = async (endpoint) => {
    const res = await fetch(`${BASE_URL}/api/${endpoint}`, { method: "POST" });
    const data = await res.json();
    setCount(data.count);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">React Counter</h1>
      <p className="text-6xl font-semibold mb-6">{count}</p>
      <div className="space-x-4">
        <button onClick={() => updateCount("decrease")} className="bg-red-400 text-white px-4 py-2 rounded">-</button>
        <button onClick={() => updateCount("reset")} className="bg-gray-400 text-white px-4 py-2 rounded">Reset</button>
        <button onClick={() => updateCount("increase")} className="bg-green-400 text-white px-4 py-2 rounded">+</button>
      </div>
    </div>
  );
}

export default App;
