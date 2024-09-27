import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(name.toLowerCase())
  );
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {filteredFruits.map((fruit, index) => (
          <li key={index} style={{ padding: "8px 0" }}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}
