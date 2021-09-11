import {
  NavLink
} from "react-router-dom";
import '../App.css';

function Navigate() {

return (
    <div className="nav-box">
  <div>

<NavLink className="nav-link" exact to="/" activeClassName="nav-active">About</NavLink>
</div>
<div>
<NavLink className="nav-link" to="/work" activeClassName="nav-active">Work</NavLink>
  </div>
  <div>
<NavLink className="nav-link" to="/projects" activeClassName="nav-active">Projects</NavLink>
  </div>
  <div>
<a className="nav-link" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1T2-NfaPRh7JXPj3unCOhefE6gfo3U5lH/view?usp=sharing">Resume</a>
  </div>
  </div>
);
}

export default Navigate;
