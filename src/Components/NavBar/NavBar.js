import React from 'react'
import {Link} from 'react-router-dom';

import { Button } from 'antd';

function NavBar() {
    return (
        <nav className = 'nav-bar'>
            <ul>
                <Button type="primary">Button</Button>
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/community"> Community </Link>
            </ul>
        </nav>
        
    )

}

export default NavBar
