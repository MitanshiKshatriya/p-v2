import React from "react"
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from "./components/About"
import Navigate from "./components/Navigate"
import Work from "./components/Work"
import Projects from "./components/Project"
import MouseParticles from 'react-mouse-particles'

function App() {
  
return (
  <>
  <div className="App-header">
  <Navigate/>
    <Switch>
      <Route exact path="/">
      <About/>
      </Route>
      <Route exact path="/work">
      <Work/>
      </Route>
      <Route exact path="/projects">
        <Projects/>
      </Route>
      <Route exact path="/resume">

      </Route>
    </Switch>
    <MouseParticles g={1} color="random" cull="col,image-wrapper" color={["#4682b4", "#89aece"]}/>
  </div>
  </>
)


}

export default App;
