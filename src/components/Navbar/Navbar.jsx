// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import imagotipo from '../../assets/images/imagotipo.png';
import '../../assets/icons/css/bb-icons.css';
import man from '../../assets/images/person/1.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to ="/">
                <img src={imagotipo} className='imagotipo' alt="Logo" />
            </Link>
            <ul className='icon-list'>
                <li>
                    <Link to="/timeline">
                        <i className="bb-icon-l bb-icon-activity"></i>
                    </Link>
                </li>

                <li>
                    <Link to="/profile">
                        <i className="bb-icon-l buddyboss bb-icon-user-avatar"></i>
                    </Link>
                </li>
                
                <li>
                    <Link to="/groups">
                        <i className="bb-icon-l buddyboss bb-icon-user-friends-alt"></i>
                    </Link>
                </li>

                <li>
                    <Link to="/messages">
                        <i className="bb-icon-l buddyboss bb-icon-comment-square-dots"></i>
                    </Link>
                </li>
            </ul>
            <ul className='profile-list'>
                <li><i className ="bb-icon-l bb-icon-search"></i></li>
                <li><div className='divider'></div></li>
                <li><i className="bb-icon-l bb-icon-inbox"></i></li>
                <li><i className="bb-icon-l bb-icon-bell"></i></li>
                <li><p className='username'>John</p></li>
            </ul>
            <ul className='profile-nav'>
                <li><img src={man} className='nav-profile-pic' alt="Profile" /></li>
            </ul>
        </div>
    );
}

export default Navbar;
