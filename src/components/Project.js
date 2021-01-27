import logo from '../logo.svg';
import '../App.css';
import Navigate from "./Navigate"

function Projects() {
  return (
    <div className="center-box">
    <div className="work-box">
    <div>
    <h3 className="work-heading">Projects</h3> 
    
<h6>Stadium Tour Management System — Python,SQLite 
<em>{" "}<u><a href="#">link</a></u></em>
</h6>

<p className="work-desc">- A python and sqlite based project for easing the task of a stadium tour
manager. Uses various sql query statements. Applies genetic algorithms
to find out the best possible route for the tour.</p>

<h6>IEEE WIE VIT website — HTML,CSS,JavaScript
<em>{" "}<u><a href="#">link</a></u></em>
</h6>

<p className="work-desc">- Built an informative page for IEEE WIE VIT with animation using vanilla
JavaScript</p>

<h6>Mood Player — Python,SpotifyAPI
<em>{" "}<u><a href="#">link</a></u></em>
</h6>

<p className="work-desc">- Built a mood player using CNN, OpenCV and SpotifyAPI. Used CNN to
detect mood of a person and change playing song on Spotify according to
the mood detected.
</p>

<h6>Encryption/Decryption using CRT — Python
<em>{" "}<u><a href="#">link</a></u></em>
</h6>

<p className="work-desc">- Implemented a research paper to encrypt and decrypt using only Chinese Remainder Theorem (CRT) and
RSA with CRT.
</p>

<h6>Taylor Swift Api — NodeJS
<em>{" "}<u><a href="#">link</a></u></em>
</h6>

<p className="work-desc">- A random taylor swift lyric generator made using NodeJS and deployed on Heroku
</p>
    </div>

       
      
        
    </div>
    </div>
  );
}

export default Projects;