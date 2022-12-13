import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom'


export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const toggleActive = () => {
       isActive ? setIsActive(!isActive) : isActive
    }
    return (
        <header className='header'>
            <img className="header-logo" src={logo} alt="logo Kasa" />
            <nav className="header-nav">
                <Link
                    to="/"
                    className="header-link"
                    id='homeLink'>
                    Accueil
                </Link>
                <Link
                    to="/about"
                    className="header-link"
                    id='aboutLink'>
                    A propos
                </Link>
            </nav>
        </header>
    )
}
