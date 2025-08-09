export default function Projects() {
  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <img src={process.env.PUBLIC_URL + '/projectafi.jpg'} alt="Project 1" />
          <h3>Project One</h3>
          <button>View Details</button>
        </div>
        <div className="project-card">
          <img src={process.env.PUBLIC_URL + '/projectgreenland.jpg'} alt="Project 2" />
          <h3>Project Two</h3>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}