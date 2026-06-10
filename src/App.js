import safetyToolkitPic from './img/safety-toolkit.png';
import portrait from './img/IMG_8958.JPG';

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Reveal from './components/Reveal';

const experiences = [
  {
    title: 'Full Stack Engineer Intern',
    company: 'Ascend Cargo Systems',
    date: 'May 2025 – Present',
    location: 'Tracy, CA',
    responsibilities: [
      'Standardize platform-wide information display by building reusable React and Tailwind CSS components, accelerating frontend development, streamlining page creation, and improving consistency, usability, and user experience.',
      'Integrate RESTful APIs for efficient data retrieval and secure frontend–backend communication.',
    ],
    tags: ['React', 'Node.js', 'JavaScript', 'Java Spring Boot', 'Full Stack'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'HYEL',
    date: 'Oct 2024 – Jan 2025',
    location: 'Los Angeles, CA',
    responsibilities: [
      'Designed and developed mobile game BFreeze from ideation through implementation, including high-fidelity UI mockups.',
      'Built core gameplay mechanics with realistic physics and smooth 2D animations.',
    ],
    tags: ['Swift', 'SpriteKit', 'GameplayKit', 'Figma', 'iOS'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Santa Clara University',
    date: 'Apr 2021 – Jan 2023',
    location: 'Sunnyvale, CA',
    responsibilities: [
      'Implemented test-driven development for a lab instrument reservation CRUD application.',
      'Developed an algorithm to parse XML and CSV lab data, improving accuracy and usability.',
    ],
    tags: ['Python', 'FastAPI', 'Vue.js', 'Docker', 'TDD'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Explorastay',
    date: 'Sep 2020 – Jul 2021',
    location: 'Austin, TX',
    responsibilities: [
      'Built responsive mobile and tablet interfaces; collaborated with peers on coding standards.',
      'Automated web crawling and test scripts to improve data collection and testing efficiency.',
    ],
    tags: ['React', 'TypeScript', 'Responsive Design'],
  },
];

const projects = [
  {
    title: 'Safety Toolkit',
    role: 'Developer · Santa Clara University',
    problem:
      'SCU students needed a single, reliable way to reach emergency contacts and services during urgent situations.',
    outcome:
      'Shipped an all-in-one safety app supporting call, text, and location sharing to designated emergency contacts and services.',
    description:
      'An all-in-one safety app for SCU students with functionalities for calling, texting, and sending location to designated emergency contacts and services.',
    image: safetyToolkitPic,
    link: 'https://github.com/josephine-lo/Safety-App',
    tags: ['Mobile', 'Safety', 'Full Stack'],
  },
];

const App = () => (
  <>
    <a href="#main" className="skip-link">
      Skip to content
    </a>

    <Nav />

    <main id="main">
      <Hero portrait={portrait} />
      <About />

      <section id="projects" className="py-24 md:py-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal>
            <p className="section-label mb-4">Selected work</p>
            <h2 className="max-w-2xl font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight tracking-[-0.02em] text-ink">
              Projects with clear problems and shipped outcomes.
            </h2>
            <p className="mt-4 max-w-prose text-muted">
              Case studies focused on what was built, why it mattered, and the technical choices behind it.
            </p>
          </Reveal>

          <div className="mt-16">
            <Projects projects={projects} />
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal>
            <p className="section-label mb-4">Experience</p>
            <h2 className="max-w-2xl font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight tracking-[-0.02em] text-ink">
              Roles where I owned features end to end.
            </h2>
          </Reveal>

          <div className="mt-16">
            <Experience experiences={experiences} />
          </div>
        </div>
      </section>

      <Contact />
    </main>

    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-2 px-6 text-xs text-muted md:flex-row md:items-center md:px-10">
        <p>Josephine Lo</p>
        <p className="font-mono">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  </>
);

export default App;
