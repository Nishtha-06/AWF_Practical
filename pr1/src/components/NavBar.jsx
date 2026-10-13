import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="site-nav">
      <div className="nav-brand">Nishtha Modi</div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
        <a href="/#about" className="nav-link">About</a>
        <a href="/#skills" className="nav-link">Skills</a>
        <NavLink to="/projects" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Contact</NavLink>
        {isAuthenticated && <button type="button" className="nav-link" onClick={handleLogout}>Log out</button>}
      </div>
    </nav>
  );
}

export default NavBar;
