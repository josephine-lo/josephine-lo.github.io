import './App.css';
import './Project.jsx';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import portrait from './img/me.png';
import { FaRegEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";

import 'bootstrap/dist/css/bootstrap.min.css';

const headerStyle = {
  color: '#282c34',
  fontSize: '50px',
  letterSpacing: '5px',
  marginLeft: '25vw',
  lineHeight: '70px',
  alignItems: 'center'
};

const subheaderStyle = {
  color: 'white',
  letterSpacing: '3px',
  marginLeft: '-50vw',
  marginTop: '15vh',
  fontSize: '35px'
  // marginTop: '-30vh'
};

const subheaderStyle2 = {
  color: 'white',
  letterSpacing: '3px'
};


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="justify-content-center" expand="lg" variant="light" /*bg="light"*/ fixed="top"
          style={{
            padding: '1.5%',
          }}>
          <Navbar.Brand href="#" style={{padding: '2%', fontSize: '25px'}}>ABOUT ME</Navbar.Brand>
          <Navbar.Brand href="#" style={{padding: '2%', fontSize: '25px'}}>PROJECTS</Navbar.Brand>
          <Navbar.Brand href="#" style={{padding: '2%', fontSize: '25px'}}>EXPERIENCE</Navbar.Brand>
        </Navbar>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="nameCard">
          <h1 style={headerStyle}>
              Josephine Lo
              <br />
              <Button variant="outline-dark" href='mailto:jlo2@scu.edu' style={{borderRadius: '90%', fontSize: '25px'}}><FaRegEnvelope /></Button>
              <Button variant="outline-dark" href='https://www.linkedin.com/in/lo-josephine/' target='_blank' style={{borderRadius: '90%', fontSize: '25px'}}><FaLinkedinIn /></Button>
              <Button variant="outline-dark" href='https://github.com/josephine-lo' target='_blank' style={{borderRadius: '90%', fontSize: '25px'}}><FiGithub /></Button>
          </h1>
          <img src={portrait} className="portrait" alt="Portrait of Josephine Lo" />
        </div>
        <div className="aboutMe">
          <h2 style={subheaderStyle}>
            About Me
          </h2>
          <div className="window"></div>
          <div className="window-circ" style={{marginLeft: '21vw', marginTop: '-38vh', backgroundColor: '#FF8787'}}></div>
          <div className="window-circ" style={{marginLeft: '22.5vw', marginTop: '-1.94vh', backgroundColor: '#F0D800'}}></div>
          <div className="window-circ" style={{marginLeft: '24vw', marginTop: '-1.9vh', backgroundColor: '#7EE000'}}></div>
        </div>

        <div className="projects">
          <h2 style={subheaderStyle2}>
            Projects
          </h2>
        </div>

        <h2 style={subheaderStyle2}>
          Experience
        </h2>
    



        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

// https://css-tricks.com/practical-css-scroll-snapping/
