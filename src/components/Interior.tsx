import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Interior = () => {
  return (
    <>
    <Navbar />
      <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Interior</h1>
      </div>
      <Footer />
      </>
  )
}

export default Interior