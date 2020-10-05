import React from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <nav className = 'nav-bar'>
            <div className="logo">
                LOGO MOVIE MAKER
            </div>
            <ul className='right-items'>
                <li><Link to="/" className = 'text-link'> Home </Link></li>
                <li><Link to="/tvshows" className = 'text-link'> TV Shows </Link></li>
                <li><Link to="/community"className = 'text-link'> Community </Link></li>
                <li><Link to="/about"className = 'text-link'> About </Link></li>
            </ul>
        </nav>
        
    )

}

export default NavBar
