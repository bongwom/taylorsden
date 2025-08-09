export default function About() {
  return (
    <div className="about-container">
      <div className="about-image-section">
        <img
          src={process.env.PUBLIC_URL + '/profile.jpg'}
          alt="My Profile"
          className="about-profile-img"
        />
      </div>
      <div className="about-text-section">
        <h1>About Me</h1>
        <p>
          Hi! am Taylor a passionate web developer who loves building beautiful and
          functional websites. I enjoy working with modern web technologies
          like React, and I’m always excited to take on new challenges.  
        </p>
        <p>
          I specialize in creating clean, responsive, and interactive user
          interfaces. My goal is to blend creativity with technical skills to
          deliver the best user experience possible.
        </p>
        <button className="about-contact-btn">
          Contact Me
        </button>
      </div>
    </div>
  );
}