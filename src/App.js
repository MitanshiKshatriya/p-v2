import logo from './logo.svg';
import { useState } from 'react';
import React, { useCallback } from "react"
import './App.css';
import About from "./components/About"
import Navigate from "./components/Navigate"
import Work from "./components/Work"
import Projects from "./components/Project"
import MouseParticles from 'react-mouse-particles'





function App() {

  const [page, setPage] = useState(1);


  // const changePage =  function(parameter) {
  //   console.log("clicked")
  //   if(parameter==="About")
  //   { setPage(1); }
  //   else if(parameter==="Work")
  //   { setPage(2); }
  //   else if(parameter==="Projects")
  //   { setPage(3); }
  //   else
  //   { setPage(1); }
  // }
  const changePage =  useCallback(
    (parameter) => {
      console.log("clicked")
      if(parameter==="About")
      { setPage(1); }
      else if(parameter==="Work")
      { setPage(2); }
      else if(parameter==="Projects")
      { setPage(3); }
      else
      { setPage(1); }
    }
  ) 
  

  if(page==1){
    return (
      <>
      
      <div className="App-header">
        <About/>
       <Navigate changePage={changePage}/>
      </div>
      {/* <MouseParticles g={1} color="random" cull="col,image-wrapper"/> */}

      <MouseParticles g={1} color="random" cull="col,image-wrapper" color={["#4682b4", "#89aece"]}/>
      </>
    );
  }
  else if(page==2)
  {
    return (
      <>
      <div className="App-header">
      <Navigate changePage={changePage}/>
        <Work/>
        <MouseParticles g={1} color={["#4682b4", "#89aece"]} cull="col,image-wrapper"/>
      </div>
      </>
    );
  }
  else if(page==3)
  {
    return (
      <>
      <div className="App-header">
      <Navigate changePage={changePage}/>
        <Projects/>
        <MouseParticles g={1} color={["#4682b4", "#89aece"]} cull="col,image-wrapper"/>
      </div>
      </>
    );
  }
  else{
    return (
      <>
    <div className="App-header">
      <About/>
     <Navigate changePage={changePage}/>
     <MouseParticles g={1} color={["#4682b4", "#89aece"]} cull="col,image-wrapper"/>
    </div>
    </>
  );}
  
}

export default App;
