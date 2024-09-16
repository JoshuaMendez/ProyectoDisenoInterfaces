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

            <div className='search-div'>
                <ul className='icon-list'>
                    <li><i className="bb-icon-l bb-icon-activity"></i></li>
                    <li><i className="bb-icon-l buddyboss bb-icon-user-avatar"></i></li>
                    <li><i className="bb-icon-l buddyboss bb-icon-user-friends-alt"></i></li>
                    <li><i className="bb-icon-l buddyboss bb-icon-comment-square-dots"></i></li>
                </ul>
            </div>

            <div className='right-div'>
                <div className='profile-list-div'>
                    <ul className='profile-list'>
                        <li><i className ="bb-icon-l bb-icon-search"></i></li>
                        <li><div className='divider'></div></li>
                        <a className="icon-relative">
                            <i className="bb-icon-l bb-icon-inbox"></i>
                            <span className='counter'>0</span>
                        </a>
                        <a className="icon-relative">
                            <i className="bb-icon-l bb-icon-bell"></i>
                            <span className='counter'>0</span>
                        </a>
                    </ul>
                </div>

                <div className='profile-div'>
                    <p className='username'>John</p>
                    <img src={man} className='profile-pic' />
                </div>
            </div>

        </div>
    );
}

export default Navbar;