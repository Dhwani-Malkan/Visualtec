import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './pages.css';
import Vishal from '/assets/vishal.jpg';
import Karan from '/assets/Karan.jpeg';

const AboutUs = () => {
  return (
    <>
      <Navbar color="white" />
      <div className="about1">
        <div>
          <h1>About Us</h1>
          <p>At Vizualtec, we are architects driven by the art of visual storytelling. With a deep understanding of space, design, and detail, we specialize in high-end 3D rendering and architectural visualization that goes beyond aesthetics—it communicates vision. Our architectural background allows us to interpret concepts with precision, transforming drawings and ideas into lifelike visuals that inspire confidence and spark imagination. By blending creativity with cutting-edge technology, we empower architects, designers, and developers to showcase their projects with clarity, impact, and emotion.</p>
        </div>
      </div>
      <div className="profile1">
        <br/><hr className='hr1' />
        <div>
          <h1>Arch. Vishal Kokul</h1>
          <h3>Founder</h3>
          <div className='profilegrid'>
          <p>He is an architect with a strong passion for design and visualization. With his expertise in architecture and 3D rendering, he established Vizualtec to help architects, designers, and developers present their ideas with clarity, precision, and creativity.</p>
          <img src={Vishal} alt="Arch. Vishal Kokul" />
          </div>
          </div>
          <hr className='hr1'/>
          <div>
          <h1>Arch. Karan Bhanushali</h1>
          <h3>Founder</h3>
          <div className='profilegrid'>
          <p>He is a professional architect with 5+ years of experience in 3D rendering and the founder of Vizualtec. Leveraging his expertise in architecture and advanced 3D visualization, he delivers highly detailed and photorealistic renders that accurately represent design concepts. Through Vizualtec, he provides architects, designers, and developers with precise and compelling visual solutions to communicate their projects with clarity and sophistication.</p>
          <img src={Karan} alt="Arch. Karan Bhanushali" />
          </div>
          </div>
          <hr className='hr1'/><br/>
        </div><br />
      <Footer />
    </>
  )
}

export default AboutUs