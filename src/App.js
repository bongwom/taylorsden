import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to My Portfolio</h1>
      <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Profile" className="profile-img" />
      <p>Hi, I'm a developer creating amazing web experiences!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;