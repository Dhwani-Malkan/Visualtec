import { Box, Grid, Typography } from "@mui/material"
import React, { forwardRef } from 'react';

const page1 = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <Box className="page1text" ref={ref}>
          <Grid direction={'column'} container spacing={2}>
            <Grid height="60dvh"></Grid>
            <Grid className="textp1" size="auto" height="30dvh">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Hype is
              <br />
              Justified
              </h1>
              <Typography className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
              Where design meets Visualization. We bring your concepts to life with precision and creativity, creating spaces that inspire and transform. Experience the future of architectural design.
              </Typography>
            </Grid>
          </Grid>
          <div className="absolute bottom-0 left-0 w-full bg-[#272520] mask-t-from-0% mask-t-to-80%" style={{height:"8dvh"}}></div>
        </Box>
    )
})

export default page1;