import React from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css'
import Card from '../CardArray/CardArray'


import { Button } from 'antd';

function NavBar() {
    return (
        <nav className = 'nav-bar'>
            <div className="logo">
                LOGO MOVIE MAKER
            </div>
            <ul className='right-items'>
                <li><Link to="/" className = 'text-link'> Home </Link></li>
                <li><Link to="/about"className = 'text-link'> About </Link></li>
                <li><Link to="/community"className = 'text-link'> Community </Link></li>
            </ul>
        </nav>
        
    )

}

export default NavBar
