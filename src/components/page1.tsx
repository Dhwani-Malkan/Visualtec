import { Box, Grid, Typography } from "@mui/material"
import React, { forwardRef } from 'react';
import "./page1.css";
import bg from "./assets/background.jpg"

const page1 = forwardRef<HTMLDivElement>((props, ref) => {
    return (
  <Box className="p1box" style={{ backgroundImage: `url(${bg})` }} ref={ref}>
          <Grid direction={'column'} container spacing={2}>
            <Grid height="55dvh"></Grid>
            <Grid className="p1grid" size="auto" height="40dvh">
              <h1 className="p1heading">
              The Hype is
              <br />
              Justified
              </h1>
              <p className="p1text">
              Where design meets Visualization. We bring your concepts to life with precision and creativity, creating spaces that inspire and transform. Experience the future of architectural design.
              </p>
            </Grid>
          </Grid>
          <div className="p1mask"></div>
        </Box>
    )
})

export default page1;
