import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./styles.css";

function App() {
  return (
    <div className="app-shell">
      <NavBar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>© 2026 Nishtha Modi</p>
        <p>Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;