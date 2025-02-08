import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [name, setname] = useState("");
  const [heading, setheading] = useState("");
  function handleinput(event) {
    console.log(event.target.value);
    setname(event.target.value);
  }
  function handlechange() {
    setheading(name);
  }

  return (
    <div className="container">
      <h1 className="heading">Hello {heading}</h1>
      <input
        className="submit-button"
        onChange={handleinput}
        type="txt"
        placeholder="Enter Name"
      />
      <button className="submit-button" onClick={handlechange}>
        Submit
      </button>
    </div>
  );
}

export default App;
