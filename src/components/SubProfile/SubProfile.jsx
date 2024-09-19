// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './SubProfile.css';
import imagotipo from '../../assets/images/imagotipo.png';
import '../../assets/icons/css/bb-icons.css';
import man from '../../assets/images/person/1.png';

const SubProfile = () => {
    return (
        <div className='menu-subprofile'>
            <li>
                <Link to="/timeline">
                    <i className="in-subprofile-list">Timeline</i>
                </Link>
            </li>
            <li>
                <Link to="/profile">
                    <i className="in-subprofile-list">Profile</i>
                </Link>
            </li>
            <li>
                <Link to="/groups">
                    <i className="in-subprofile-list">Groups</i>
                </Link>
            </li>
            <li>
                <Link to="/courses">
                    <i className="in-subprofile-list">Courses</i>
                </Link>
            </li>
            <li>
                <Link to="/documents">
                    <i className="in-subprofile-list">Documents</i>
                </Link>
            </li>
            <li>
                <Link to="/photos">
                    <i className="in-subprofile-list">Photos</i>
                </Link>
            </li>
        </div>
    );
}

export default SubProfile;
