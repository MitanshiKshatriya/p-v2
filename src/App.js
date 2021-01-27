import logo from './logo.svg';
import { useState } from 'react';
import React, { useCallback } from "react"
import './App.css';
import About from "./components/About"
import Navigate from "./components/Navigate"
import Work from "./components/Work"
import Projects from "./components/Project"


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
      <div className="App-header">
        <About/>
       <Navigate changePage={changePage}/>
      </div>
    );
  }
  else if(page==2)
  {
    return (
      <div className="App-header">
      <Navigate changePage={changePage}/>
        <Work/>
       
      </div>
    );
  }
  else if(page==3)
  {
    return (
      <div className="App-header">
      <Navigate changePage={changePage}/>
        <Projects/>
       
      </div>
    );
  }
  else{
    return (
    <div className="App-header">
      <About/>
     <Navigate changePage={changePage}/>
    </div>
  );}
  
}

export default App;
