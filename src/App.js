import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navigate from "./components/Navigate";
import Work from "./components/Work";
import Projects from "./components/Project";
import MouseParticles from "react-mouse-particles";

function App() {
  return (
    <>
      <div className="App-header">
        <Navigate />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <MouseParticles
          g={1}
          cull="col,image-wrapper"
          color={["#4682b4", "#89aece"]}
        />
      </div>
    </>
  );
}

export default App;
