import { lazy,Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

import "./styles.css";

function App() {
  return (
    <div className="app-shell">
      <NavBar />

      <main className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="app-footer">
        <p>© 2026 Nishtha Modi</p>
        <p>Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;