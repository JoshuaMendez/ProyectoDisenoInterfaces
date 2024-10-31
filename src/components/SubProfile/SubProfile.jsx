// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './SubProfile.css';
import '../../assets/icons/css/bb-icons.css';
import { useSelector } from 'react-redux';

const SubProfile = () => {
    const currentPage = useSelector((state) => state.page.currentPage);
    return (
        <div className='menu-subprofile-component'>
            <li>
                <Link to="/timeline">
                    <i className={currentPage === '/timeline' ? "in-subprofile-list-strong" : "in-subprofile-list"}>Timeline</i>
                </Link>
            </li>
            <li>
                <Link to="/profile">
                    <i className={currentPage === '/profile' ? "in-subprofile-list-strong" : "in-subprofile-list"}>Profile</i>
                </Link>
            </li>
            <li>
                <Link to="/groups">
                    <i className={currentPage === '/groups' ? "in-subprofile-list-strong" : "in-subprofile-list"}>Groups</i>
                </Link>
            </li>
            <li>
                <Link to="/courses">
                    <i className={currentPage === '/courses' ? "in-subprofile-list-strong" : "in-subprofile-list"}>Courses</i>
                </Link>
            </li>
            <li>
                <Link to="/documents">
                    <i className={currentPage === '/documents' ? "in-subprofile-list-strong" : "in-subprofile-list"}>Documents</i>
                </Link>
            </li>
            <li>
                <Link to="/photos">
                    <i className={currentPage === '/photos' ? "in-subprofile-list-strong" : "in-subprofile-list"}>Photos</i>
                </Link>
            </li>
        </div>
    );
}

export default SubProfile;
