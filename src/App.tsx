import { Box, Button, Toolbar, Paper, Grid, Typography, Skeleton } from '@mui/material'
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import { useEffect, useRef, useState } from 'react';
import Page4 from './components/page4';
import Mask from './components/Mask';
import Page5 from './components/page5';

function App() {
  const componentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (componentRef.current) {
      setHeight(componentRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
    {/* navbar */}
    <Toolbar className="nav">
      <img className="logo" src="./assets/logo.svg"/>
      <button className='menuicon'><img src="./assets/menuicon.svg"/></button>  
    </Toolbar>
    {/* Homepage */}
    <Box className="content">
      <Box className = "homepage">
        <div className="op" style={{height: height}}></div>
        <Page1 ref={componentRef} /> 
        <br/>
        <hr/>
        <br/>
        <Page2/>
        <Page3/>
        <br/>
        <hr/>
        <br/>
        <Page4/>
        <Page5/>
      </Box>
    </Box>
    <hr/><br/>
    </>
  )
}

export default App
