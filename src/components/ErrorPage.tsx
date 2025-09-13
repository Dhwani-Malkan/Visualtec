import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h2 className="popup-title">Oops you are on the wrong page!</h2>
            <p className="popup-message">We think there's some error entering the website link. Click the button below to navigate to the actual website link.</p>
        <Link to="/Vizualtec/">Go Home</Link>
    </div>
  )
}

export default ErrorPage