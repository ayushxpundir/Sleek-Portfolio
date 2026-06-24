import { NavLink } from "react-router-dom";

function Topheader() {
  return (
    <header className="top-header">
      <ul>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/certifications">Certifications</NavLink></li>
      </ul>
    </header>
  );
}

export default Topheader;