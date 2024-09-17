// Navbar.jsx
import React from 'react';
import './Navbar.css';
import imagotipo from '../../assets/images/imagotipo.png';
import '../../assets/icons/css/bb-icons.css';
import man from '../../assets/images/models/man.jpg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={imagotipo} className='imagotipo' />
            <ul className='icon-list'>
                <li><i className="bb-icon-l bb-icon-activity"></i></li>
                <li><i className="bb-icon-l buddyboss bb-icon-user-avatar"></i></li>
                <li><i className="bb-icon-l buddyboss bb-icon-user-friends-alt"></i></li>
                <li><i className="bb-icon-l buddyboss bb-icon-comment-square-dots"></i></li>
            </ul>
            <ul className='profile-list'>
                <li><i className ="bb-icon-l bb-icon-search"></i></li>
                <li><div className='divider'></div></li>
                <li><i className="bb-icon-l bb-icon-inbox"></i></li>
                <li><i className="bb-icon-l bb-icon-bell"></i></li>
                <li><p className='username'>John</p></li>
            </ul>
            <ul className='profile'>
                <li><img src={man} className='profile-pic' /></li>
            </ul>
        </div>
    );
}

export default Navbar;