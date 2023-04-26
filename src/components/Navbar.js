import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { links } from '../data';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    
    const [isNavShowing, setIsNavSHowing] = useState(false)

    return (
        <nav>
            <div className='container nav__container'>
                <div>
                    <Link to='/' className='logo' onClick={() => setIsNavSHowing(false)}> 
                        <h2>GYMFUEL</h2>
                    </Link>
                </div>
                <div>
                    <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                        {
                            links.map(({name, path}, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={path} className={({isActive}) => isActive ? 'active_nav' : ''} onClick={() => setIsNavSHowing(prev => !prev)}>{name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className='nav__toggle-btn' onClick={() => setIsNavSHowing(prev => !prev)}>
                        {
                            isNavShowing ? <FaTimes></FaTimes> : <FaBars ></FaBars>
                        }
                        
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;