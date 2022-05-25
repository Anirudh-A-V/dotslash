import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import { Button } from './Button.js';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        {/* <img src='/logo.png' alt='logo' /> */}
                    </Link>
                    <div className='navbar-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/competitions' className='nav-links' onClick={closeMobileMenu}>Competitions</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/workshops' className='nav-links' onClick={closeMobileMenu}>Workshops</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gaming' className='nav-links' onClick={closeMobileMenu}>Gaming</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>Contact Us</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar