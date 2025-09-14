import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Vr = () => {
  return (
    <>
    <Navbar color="white" />
      <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>VR</h1>
      </div>
      <Footer />
      </>
  )
}

export default Vr