import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="site-nav">
      <div className="nav-brand">Nishtha Modi</div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
        <a href="/#about" className="nav-link">About</a>
        <a href="/#skills" className="nav-link">Skills</a>
        <NavLink to="/projects" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
