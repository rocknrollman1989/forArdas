import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header>
            <p>Welcome to Task Manager;)</p>
            <div className='header-links-block'>
                <Link to='/'>Home</Link>
                <Link to='/task_page'>Task Page</Link>
            </div>
        </header>
    );
};

export default Header;
