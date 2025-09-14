import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const ErrorPage = () => {
  return (
    <>
    <Navbar color="white" />
      <div>
        <h2 className="popup-title">Oops you are on the wrong page!</h2>
            <p className="popup-message">We think there's some error entering the website link. Click the button below to navigate to the actual website link.</p>
        <Link to="/Vizualtec/">Go Home</Link>
    </div>
      <Footer />
      </>
    
  )
}

export default ErrorPage