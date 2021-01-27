import logo from '../logo.svg';
// import myimage2 from "../assets/IMG-20200727-WA0038 (2).jpg"
// import myimage1 from "../assets/IMG-20200727-WA00382.jpg"
import myimage from "../assets/IMG_20201207_031914.jpg"

import '../App.css';
import github from "../assets/socials/github-sign.svg"
import linkedin from "../assets/socials/linkedin.svg"
import twitter from "../assets/socials/twitter.svg"
import gmail from "../assets/socials/email.svg"
import Navigate from "./Navigate"

function About() {
  return (
    <div className="center-box">
    <div className="box">
        <div className="myimage_myname">
        <div>
        <img src={myimage} className="myimage" alt="logo" />
        </div>
        <div>
        <h1 id="myname">Mitanshi Kshatriya</h1>
        <p>
          Developer in the making. Being my own hype woman.
        </p>
        </div>
        </div>
        
        
    <div className="socials">
    
        <a
          className="App-link"
          href="https://github.com/MitanshiKshatriya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="socials-logo" alt="logo" />
        </a>
        {"  "}
        <a
          className="App-link"
          href="https://www.linkedin.com/in/mitanshi-kshatriya-318204172/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="socials-logo" alt="logo" />
        </a>
        {"  "}
        <a
          className="App-link"
          href="https://twitter.com/codeYellow6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} className="socials-logo" alt="logo" />
        </a>
        {"  "}
        <a
          className="App-link"
          href="mailto:mitanshikshatriya@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
            <img src={gmail} className="socials-logo" alt="logo" />
        </a>
        {"  "}
    </div>
    </div>
    </div>
  );
}

export default About;