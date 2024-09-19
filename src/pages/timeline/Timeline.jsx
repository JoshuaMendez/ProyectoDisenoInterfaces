import React from 'react';
// timeline copia de profilepage
import '../profilepage/ProfilePage.css'
import { Link } from 'react-router-dom';
import profilePic from '../../assets/images/person/1.png'; 
import Navbar from '../../components/Navbar/Navbar';
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx'; // Asegúrate de que la ruta sea correcta
import LeftBar from '../../components/Leftbar/Leftbar';
import SubProfile from '../../components/SubProfile/SubProfile';
import GeneralProfile from '../../components/GeneralProfile/GeneralProfile'
import LatestUpdates from '../../components/LatestUpdates/latestUpdates.jsx'
import ProfileGroup from '../../components/ProfileGroup/ProfileGroup.jsx'


function Timeline() {
    return (
        <div className="profile-page">
            <ProfileGroup />
        </div>
    );
}

export default Timeline;