import React from 'react';
import './ProfilePage.css';
import GeneralProfile from '../../components/GeneralProfile/GeneralProfile';


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
