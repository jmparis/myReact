import React from "react";
import "./styles.css";

function Greeting() {
  const name = "React";

  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Greeting />
    </div>
  );
}
