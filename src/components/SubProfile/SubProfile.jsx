// SubProfile.jsx
// import React from 'react';
import { Link } from 'react-router-dom'; 
import './SubProfile.css';
import '../../assets/icons/css/bb-icons.css';
import { useSelector } from 'react-redux';

const SubProfile = () => {
    const currentPage = useSelector((state) => state.page.currentPage);
    
    const menuItems = [
        { path: "/timeline", label: "Timeline" },
        { path: "/profile", label: "Profile" },
        { path: "/groups", label: "Groups" },
        { path: "/courses", label: "Courses" },
        { path: "/documents", label: "Documents" },
        { path: "/photos", label: "Photos" },
    ];

    return (
        <ul className='menu-subprofile-component'>
            {menuItems.map((item) => (
                <li key={item.path}>
                    <Link to={item.path} aria-label={item.label}>
                        <i className={currentPage === item.path ? "in-subprofile-list-strong" : "in-subprofile-list"}>
                            {item.label}
                        </i>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default SubProfile;
