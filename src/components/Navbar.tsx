import { Toolbar } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState, useRef } from "react";
import { Link } from "react-router-dom"
import logo from '/assets/logo.svg';
import logowhite from '/assets/logo_white.svg'; 
import { HashLink } from "react-router-hash-link"

interface NavbarProps {
    color: string;
}

const Navbar = ({ color }: NavbarProps) => {
    const [show, setShow] = useState(false);
    const menuRef = useRef(null);
    return (
        <Toolbar className="nav" style={{ backgroundColor: color }}>
            <HashLink to='/Vizualtec/#home'><img className="logo" src={color=== "white"? logowhite : logo} /></HashLink>
            <button onClick={() => setShow(!show)} className="menuicon" style={{ color: color === "white" ? "black" : "white" }}>
                <MenuRoundedIcon />
            </button>

            {/* Overlay */}
            {show && (
                <div className="overlay" ref={menuRef}>
                    <div className="overlay-content">
                        <ul className='overlay-ul' >
                            <li><HashLink to='/Vizualtec/#home' onClick={() => setShow(false)} className="menu-link">Home</HashLink></li><hr className='hr2' />
                            <li><HashLink to='/Vizualtec/#projects' onClick={() => setShow(false)} className="menu-link">Our Projects</HashLink></li><hr className='hr2' />
                            <li><Link to='/Vizualtec/About/' onClick={() => setShow(false)} className="menu-link">About Us</Link></li><hr className='hr2' />
                            <li><HashLink to='/Vizualtec/#contact' onClick={() => setShow(false)} className="menu-link">Contact</HashLink></li>
                        </ul>
                    </div>
                </div>
            )}
        </Toolbar>
    )
}

export default Navbar