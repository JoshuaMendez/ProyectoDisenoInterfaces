import React from 'react';
import './ProfilePage.css';
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx';
import SubProfile from '../../components/SubProfile/SubProfile';
import GeneralProfile from '../../components/GeneralProfile/GeneralProfile';
// import LatestUpdates from '../../components/LatestUpdates/latestUpdates.jsx'
import img from '../../assets/images/person/1.png';
import banner from '../../assets/images/post/background.jpg';

function ProfilePage() {
    return (
        <div className="content-profile">
            <div className="left-column-profile">{}</div>
            <div className="middle-column-profile">
                <GeneralProfile />
            </div>
            <div className="spacer-column-profile">{}</div>
        </div>
    );
}

export default ProfilePage;
