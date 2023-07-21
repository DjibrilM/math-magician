import React from 'react';
import NavLink from './NavLink';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='main-header'>
            <div className="header-container">
                <Link to="/">
                    <h2>Math Magician</h2>
                </Link>

                <ul>
                    <NavLink path="/" placeholder='Home' />
                    <NavLink path="/calculator" placeholder='Calculator' />
                    <NavLink path="/quotes" placeholder='Quotes' />
                </ul>
            </div>
        </header>
    );
}

export default Header