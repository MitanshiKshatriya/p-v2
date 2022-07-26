import { NavLink } from "react-router-dom";
import "../App.css";

function Navigate() {
  return (
    <div className="nav-box">
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-active" : "nav-link"
          }
          exact
          to="/"
        >
          About
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-active" : "nav-link"
          }
          to="/work"
        >
          Work
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-active" : "nav-link"
          }
          to="/projects"
        >
          Projects
        </NavLink>
      </div>
      <div>
        <a
          className="nav-link"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1T2-NfaPRh7JXPj3unCOhefE6gfo3U5lH/view?usp=sharing"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navigate;
