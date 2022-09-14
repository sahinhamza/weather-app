import React from "react";
import { Dropdown } from "./components/dropdown";
import { Weather } from "./components/weather";
import { Days } from "./components/days";

function App() {
  return (
    <div className="App">
      <Dropdown />
      <Weather />
      <Days />
    </div>
  );
}

export default App;
