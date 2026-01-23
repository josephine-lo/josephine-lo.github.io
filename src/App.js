import './App.css';
import { useState, useMemo, useEffect } from 'react';
import safetyToolkitPic from './img/safety-toolkit.png';
import portrait from './img/IMG_8958.JPG';
import { FaRegEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import { FaMoon, FaSun } from 'react-icons/fa';

import Projects from './components/Project.jsx';
import Experience from './components/Experience.jsx';

const allExperiences = [
    {
      title: "Full Stack Engineer Intern",
      company: "Ascend Cargo Systems",
      date: "Mar 2025 - Present",
      location: "Tracy, CA",
      responsibilities: [
        "Utilized LLMs in building dynamic, interactive UIs, improving responsiveness and user engagement",
        "Integrated RESTful APIs for efficient data retrieval and secure communication between frontend and backend",
      ],
      tags: ["React", "Node.js", "JavaScript", "Java Spring Boot", "Full Stack", "Responsive Design"]
    },
    {
      title: "Software Engineer Intern",
      company: "HYEL",
      date: "Oct 2024 - Jan 2025",
      location: "Los Angeles, CA",
      responsibilities: [
        "Designed and developed mobile game BFreeze from ideation to implementation, including high-fidelity UI mockups",
        "Built core gameplay mechanics with realistic physics and smooth 2D animations for immersive player experience"
      ],
      tags: ["Swift", "Xcode", "SpriteKit", "GameplayKit", "Figma", "iOS"]
    },
    {
      title: "Software Developer Intern",
      company: "Santa Clara University",
      date: "Apr 2021 - Jan 2023",
      location: "Sunnyvale, CA",
      responsibilities: [
        "Implemented test-driven development for a lab instrument reservation CRUD app",
        "Developed an algorithm to parse XML and CSV lab data, improving accuracy and usability"
      ],
      tags: ["Python", "FastAPI", "Vue.js", "Docker", "Test-Driven Development", "Full Stack"]
    },
    {
      title: "Software Engineer Intern",
      company: "Explorastay",
      date: "Sep 2020 - Jul 2021",
      location: "Austin, TX",
      responsibilities: [
        "Built responsive mobile/tablet interfaces and collaborated with peers to enforce best coding practices",
        "Automated web crawling and test scripts, improving data collection and testing efficiency"
      ],
      tags: ["React", "TypeScript", "Responsive Design"]
    },
];

const App = () => {
  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set();
    allExperiences.forEach(exp => {
      if (exp.tags) {
        exp.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  }, []);

  // Filter state
  const [selectedTags, setSelectedTags] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Filter experiences based on selected tags
  const filteredExperiences = useMemo(() => {
    if (selectedTags.length === 0) {
      return allExperiences;
    }
    return allExperiences.filter(exp => 
      exp.tags && exp.tags.some(tag => selectedTags.includes(tag))
    );
  }, [selectedTags]);

  // Clear all filters
  const clearFilters = () => {
    setSelectedTags([]);
  };
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <a href="#about-me" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#experience" className="nav-link">Experience</a>
        <button 
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="name">Josephine Lo</h1>
            <p className="tagline">Master's of Computer Science Graduate</p>
            <p className="subtitle">University of Illinois, Urbana-Champaign</p>
            <div className="social-links">
              <a href='mailto:jlo10@illinois.edu' className="social-link" aria-label="Email">
                <FaRegEnvelope />
              </a>
              <a href='https://www.linkedin.com/in/lo-josephine/' target='_blank' rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href='https://github.com/josephine-lo' target='_blank' rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FiGithub />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={portrait} className="portrait" alt="Portrait of Josephine Lo" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi there! I'm Josephine Lo, a recent graduate from the <em>University of Illinois, Urbana-Champaign</em>. 
              I previously received my Bachelor of Science from Santa Clara University with an emphasis in <strong>Software</strong>.
            </p>
            <p>
              My interests lie in <em>frontend</em>, <em>full-stack development</em>, and <em>software testing</em>. 
              When I'm not coding, you can catch me drawing or walking my chihuahua!
            </p>
          </div>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">School:</span>
              <span className="detail-value">UIUC</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Major:</span>
              <span className="detail-value">Master's of Computer Science, MCS</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Emphasis:</span>
              <span className="detail-value">Software</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Graduated:</span>
              <span className="detail-value">Dec 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <Projects 
          projects={[
            // Add your projects here
            // Example:
            {
              title: "Safety Toolkit",
              description: "An all-in-one safety app for SCU students with functionalities for calling, texting, and sending location to designated emergency contacts and services",
              image: safetyToolkitPic,
              link: "https://github.com/josephine-lo/Safety-App"
            }
          ]}
        />
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        
        {/* Filter Section */}
        <div className="filter-section">
          <div className="filter-header">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="filter-toggle-btn"
              aria-expanded={isFilterOpen}
            >
              <span className="filter-label">Filter by technology</span>
              <span className={`filter-arrow ${isFilterOpen ? 'open' : ''}`}>▼</span>
            </button>
            {selectedTags.length > 0 && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Clear filters
              </button>
            )}
          </div>
          {isFilterOpen && (
            <div className="filter-tags">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`filter-tag ${selectedTags.includes(tag) ? 'active' : ''}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        <Experience 
          experiences={filteredExperiences} />
      </section>
    </div>
  );
}

export default App;
