import { Box, Toolbar } from '@mui/material'

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
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navbar from './components/Navbar';

function App() {
  const componentRef = useRef<HTMLDivElement>(null);

  var w = window.innerWidth;
  var h = window.innerHeight;
  var ratio = w / h;

  return (
    <>
      {/* navbar */}
      <Navbar color="black" />
      {/* Homepage */}
      {/* <Mask /> */}
      <Box className="content">
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
            <Page5 />
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
    </>
  )
}

export default App
