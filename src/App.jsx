import "./App.css";
import { useState, useRef } from "react";
import FirstHook from "./components/FirstHook";
import SecondHook from "./components/SecondHook";
import Task2 from "./components/Task2";

function App() {
  const [name, setName] = useState("");
  const [bg, setBg] = useState("white");
  const [bg2, setBg2] = useState("black");

  const handleBg2 = (e) => {
    setBg("white")
  };

  const handleBg = (e) => {
    setBg("black")
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div style={{ backgroundColor: `${bg}` }} className="container">
        <input type="text" value={name} onChange={(e) => handleChange} />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FirstHook></FirstHook>
        <SecondHook></SecondHook>
        <br />
        <br />
        <h2>Задание 1</h2>
        <button onClick={handleBg}>Black</button>
        <button onClick={handleBg2}>White</button>
        <br />
        <br />
        <h2>Задание 2</h2>
        <Task2></Task2>
      </div>
    </>
  );
}

export default App;
