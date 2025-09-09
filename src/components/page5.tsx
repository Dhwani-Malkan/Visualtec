import { Stack } from '@mui/material';
import React from 'react';
import "./page5.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Page5 = () => {
    const stats = [
    { end: 7, label: "Years of experience" },
    { end: 25, label: "Architecture projects" },
    { end: 50, label: "Interior projects" },
    { end: 15, label: "Commercial projects" },
  ];
  const icons = [
    "./assets/icon5.svg",
    "./assets/icon6.svg",
    "./assets/icon5.svg",
    "./assets/icon5.svg",
  ];

  return (
    <Stack className="p5">
      {/* Heading */}<br/>
     <hr className='hr1' />
      <div className="p5text">
          <h6>Our</h6>
          <h1 className="p3heading">Numbers</h1>
      </div>
      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="stat-number">
              <CountUp end={stat.end} duration={6} enableScrollSpy scrollSpyOnce />
              +
            </div>
            <div className="stat-line"></div>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div><br/>
      <hr className='hr1' />
        <div className="p5text">
          <h6>Our</h6>
          <h1 className="p3heading">Partners</h1>
      </div>
      {/* Stats Grid */}
      <div className="stats-grid">
        {icons.map((icon, i) => (
          <div key={i} className="stat-item">
            <img className="icon" src={icon} />
          </div>
        ))}
      </div><br/>
    </Stack>
    
  );
};

export default Page5;