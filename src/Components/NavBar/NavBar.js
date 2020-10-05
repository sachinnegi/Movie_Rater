import React from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <nav className = 'nav__bar'>
            <div className="logo">
                LOGO MOVIE MAKER
            </div>
            <ul className='right__items'>
                <li><Link to="/" className = 'text__link'> Home </Link></li>
                <li><Link to="/tvshows" className = 'text__link'> TV Shows </Link></li>
                <li><Link to="/community"className = 'text__link'> Community </Link></li>
                <li><Link to="/about"className = 'text__link'> About </Link></li>
            </ul>
        </nav>
        
    )

}

export default NavBar
