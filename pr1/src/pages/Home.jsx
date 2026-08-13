import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import profileImage from "../imagep.jpeg";

function Home() {
  const skills = ["C++", "Java", "Python", "JavaScript", "React", "Vite", "FastAPI", "Node.js", "Express", "MySQL", "Machine Learning", "NLP", "Generative AI", "OpenCV", "Git", "Docker"];

  const projects = [
    { title: "IntelliOrbit Pro", desc: "Developer dashboard for intelligent task management, analytics, and workflow automation.", tags: ["React", "Node.js", "AI"] },
    { title: "Customer Churn Prediction", desc: "ML pipeline for retention analysis, churn scoring, and actionable insights.", tags: ["Python", "Machine Learning", "Data"] },
  ];

  return (
    <div className="home-page">

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-photo-wrap">
          <img src={profileImage} alt="Nishtha Modi" className="hero-photo" />
        </div>
        <p className="hero-hey">Hey, I'm</p>
        <h1 className="hero-name">Nishtha Modi</h1>
        <p className="hero-role">Computer Engineering Student &amp; Full Stack Developer</p>
        <p className="hero-description">
          Passionate about building practical solutions with Artificial Intelligence,
          Machine Learning, Generative AI, and modern web technologies.
        </p>
        <div className="hero-buttons">
          <a href="mailto:nmodi0404@gmail.com" className="btn-hero btn-hero-primary">
            <FaEnvelope /> nmodi0404@gmail.com
          </a>
          <a href="tel:+91XXXXXXXXXX" className="btn-hero btn-hero-secondary">
            <FaPhone /> Contact
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
            <FaGithub size={22} />
          </a>
        </div>
      </section>

      {/* ── About ── */}
      <section className="home-section" id="about">
        <p className="section-label">About Me</p>
        <h2 className="section-heading">Focused on AI, software, and polished interfaces.</h2>
        <p className="section-body">
          I'm a Computer Science student creating practical applications, AI prototypes, and
          intuitive full-stack experiences. I enjoy turning ideas into real products.
        </p>
        <div className="about-grid">
          <div className="info-card"><h3>AI / ML</h3><p>Building smart, data-driven systems and model-backed applications.</p></div>
          <div className="info-card"><h3>Full Stack</h3><p>Developing modern React front ends with backend APIs and service integrations.</p></div>
          <div className="info-card"><h3>Systems</h3><p>Writing clean, maintainable code with a focus on quality and performance.</p></div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="home-section" id="skills">
        <p className="section-label">Skills</p>
        <h2 className="section-heading">What I Work With</h2>
        <div className="skills-grid">
          {skills.map((s, i) => <span className="skill-chip" key={i}>{s}</span>)}
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="home-section" id="projects">
        <p className="section-label">Projects</p>
        <h2 className="section-heading">Things I've Built</h2>
        <div className="project-summary">
          {projects.map((p, i) => (
            <div className="project-detail-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">{p.tags.map((t, j) => <span key={j}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
