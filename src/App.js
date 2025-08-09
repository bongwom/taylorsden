import React from "react";
import "./App.css"; // We'll style it in a moment

function App() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h1>John Doe</h1>
        <p>Frontend Developer | React Enthusiast | UI Designer</p>
      </header>

      {/* Projects */}
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="/project-afi.jpg" alt="Project 1" />
            <h3>Project One</h3>
            <p>A brief description of this awesome project.</p>
          </div>
          <div className="project-card">
            <img src="/project-greenlandcare.jpg" alt="Project 2" />
            <h3>Project Two</h3>
            <p>Another exciting project worth showcasing.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="contact">
        <h2>Contact Me</h2>
        <p>Email: johndoe@example.com</p>
        <p>GitHub: <a href="https://github.com/your-username">your-username</a></p>
      </footer>
    </div>
  );
}

export default App;