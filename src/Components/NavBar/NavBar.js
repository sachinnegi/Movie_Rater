import React from 'react'
import {Link} from 'react-router-dom';
import { Input } from 'antd';
import './NavBar.css'

const { Search } = Input;

function NavBar({onSearchChange}) {
    return (
        <nav className = 'nav__bar'>
            <div style={{color:'white'}} className="logo">
                MOVIE RATER
            </div>
            <ul className='right__items'>
                <li> 
                    <Search 
                        placeholder="input search text" 
                        onSearch={value => onSearchChange(value)} 
                        enterButton
                    />
                </li>
                <li><Link to="/" className = 'text__link'> Home </Link></li>
                <li><Link to="/tvshows" className = 'text__link'> TV Shows </Link></li>
                <li><Link to="/community"className = 'text__link'> Community </Link></li>
                <li><Link to="/about"className = 'text__link'> About </Link></li>
            </ul>
        </nav>
        
    )

}

export default NavBar
