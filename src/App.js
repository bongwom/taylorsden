import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <img
          src="/me.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <h1>Hi, I'm [Your Name]</h1>
        <p>Frontend Developer | Designer | Problem Solver</p>
      </header>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate web developer with experience in building modern,
          responsive websites. I love turning ideas into reality using code.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <img src="/project-afi.png" alt="Project 1" />
            <h3>Project One</h3>
            <p>A short description of your first project.</p>
          </div>
          <div className="project-card">
            <img src="/project-greenlandcare.png" alt="Project 2" />
            <h3>Project Two</h3>
            <p>A short description of your second project.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;