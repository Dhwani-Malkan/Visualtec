import { Box, Toolbar } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import { useEffect, useRef, useState } from 'react';
import Page4 from './components/page4';
import Page5 from './components/page5';
import Page6 from './components/page6';
import Page7 from './components/page7';
import './App.css';
import Footer from './components/Footer';

function App() {
  const componentRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  var w = window.innerWidth;
  var h = window.innerHeight;
  var ratio = w / h;

  return (
    <>
      {/* navbar */}
      <Toolbar className="nav">
        <a href="#home"><img className="logo" src="./assets/logo.svg" /></a>
        {/* <button className='menuicon'><img src="./assets/menuicon.svg"/></button>  */}
        <button onClick={() => setShow(!show)} className="open-btn menuicon">
          <MenuRoundedIcon />
        </button>

        {/* Overlay */}
        {show && (
          <div className="overlay" ref={menuRef}>
            <div className="overlay-content">
              <ul className='overlay-ul' >
                <li><a href="#home" onClick={() => setShow(false)} className="menu-link">Home</a></li><hr className='hr2' />
                <li><a href="#projects" onClick={() => setShow(false)} className="menu-link">Our Projects</a></li><hr className='hr2' />
                <li><a href="#about" onClick={() => setShow(false)} className="menu-link">About Us</a></li><hr className='hr2' />
                <li><a href="#contact" onClick={() => setShow(false)} className="menu-link">Contact</a></li>
              </ul>
            </div>
          </div>
        )}
      </Toolbar>
      {/* Homepage */}
      {/* <Mask /> */}
      <Box className="content" onClick={() => setShow(false)}>
        <Box className="homepage">
          <div className="op"></div>
          <section id="home">
            <Page1 ref={componentRef} />
          </section>
          <Page2 />
          <section className='page3'>
            <Page3 id='projects' />
          </section>
          <section className='page4'>
            <br />
            <Page4 />
          </section>
          <section className='page5'>
            <Page5 /><br />
            <hr className='hr1' />
            <br />
          </section>
          <section className='page6'>
            <Page6 />
          </section>
          <section id="contact" className='page7'>
            <Page7 />
          </section>
          {/* <Page6/> */}
        </Box>
      </Box>
      <br />
      <Footer/>
      <br />
      {/* <footer>
        <Box className="footer">
          <img className="logo2" src="./assets/logo.svg" />
          <hr />
          <p className="footer-text">© 2024 Visualtec. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/Visualtec" target="_blank" rel="noopener noreferrer">
              <img src="./assets/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/Visualtec" target="_blank" rel="noopener noreferrer">
              <img src="./assets/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/Visualtec" target="_blank" rel="noopener noreferrer">
              <img src="./assets/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </Box>
      </footer> */}
    </>
  )
}

export default App
