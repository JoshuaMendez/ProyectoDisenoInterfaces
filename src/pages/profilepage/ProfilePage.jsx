import React from 'react';
import './ProfilePage.css'
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx';
import SubProfile from '../../components/SubProfile/SubProfile';
import GeneralProfile from '../../components/GeneralProfile/GeneralProfile'
// import LatestUpdates from '../../components/LatestUpdates/latestUpdates.jsx'


function ProfilePage() {
    return (
        <header className="profile-page">
            <div className="content">
                <div className="left-column-profile">
                    {/* Contenido de la primera columna */}
                </div>
                <div className="middle-column-profile">
                    <div className="profile-container">
                        <UserProfileComponent
                            name='John' 
                            followers='15' 
                            following='3' 
                            joined='last week' 
                            social='Admin' 
                            image='https://online-communities.demos.buddyboss.com/wp-content/sandbox334681-uploads/avatars/2/621e2ce403550-bpfull.png   ' 
                            portada='https://online-communities.demos.buddyboss.com/wp-content/sandbox334681-uploads/buddypress/members/2/cover-image/621e2cf2a9e5d-bp-cover-image.jpg'
                        />
                    </div>
                    <div className="menu-subprofile">
                        <SubProfile />
                    </div>
                    <div className="general-profile-container">
                        <GeneralProfile />
                    </div>
                </div>
                <div className="spacer-column-profile">
                    {/* Columna vacía para separar las columnas */}
                </div>
            </div>
        </header>
    );
}

export default ProfilePage;