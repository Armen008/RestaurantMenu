import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Story from "./components/Story";
import OurMenu from "./components/OurMenu";


function App() {
  return (
    <div className="App">
    <Welcome/>
    <Story/>
    <OurMenu/>
    </div>
  );
}

export default App;