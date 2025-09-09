import { Stack, Grid } from "@mui/material"
import React, { forwardRef, useState } from 'react';
import "./page1.css";
// @ts-ignore
import bg from '/assets/layer0.png';
import layer from '/assets/layer1.png';


const page1 = forwardRef<HTMLDivElement>((props, ref) => {
   const [showText, setShowText] = useState(false);
    return (
  <Stack className="p1box" style={{ backgroundImage: `url(${bg})` }}  ref={ref}>
    <img src={layer} className="layer-image" onAnimationEnd={() => setShowText(true)}/>
          {showText && <Grid direction={'column'} container spacing={2}>
            <Grid height="55dvh"></Grid>
            <Grid className="p1grid" size="auto" height="40dvh" >
              <h1 className="p1heading">
              The Hype is
              <br />
              Justified
              </h1>
              <p className="p1text">
              Where design meets Visualization. We bring your concepts to life with precision and creativity, creating spaces that inspire and transform. Experience the future of architectural design.
              </p>
            </Grid>
          </Grid>}
          <div className="p1mask"></div>
        </Stack>
    )
})

export default page1;
