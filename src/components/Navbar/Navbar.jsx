// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import imagotipo from '../../assets/images/imagotipo.png';
import '../../assets/icons/css/bb-icons.css';
import man from '../../assets/images/person/1.png';
import NotificationIcon from './notifications/notification';
import InboxIcon from './inboxInteractive/inboxInteractive';

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
                    <Link to="/courses">
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
                <li><i className ="bb-icon-f bb-icon-search"></i></li>
                <li><div className='divider'></div></li>
                <li><InboxIcon></InboxIcon></li>
                <li><NotificationIcon></NotificationIcon></li>
                <li>
                    <Link to = "/profile">
                    <p className='username'>John</p>
                    </Link>
                </li>
            </ul>
            <ul className='profile-nav'>
                <li>
                    <Link to = "/profile">
                    <img src={man} className='nav-profile-pic' alt="Profile" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
