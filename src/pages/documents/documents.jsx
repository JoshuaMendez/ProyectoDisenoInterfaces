import React from 'react';
import './documents.css'
// import Navbar from '../../components/Navbar/Navbar';
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx';
// import LeftBar from '../../components/Leftbar/Leftbar';
import SubProfile from '../../components/SubProfile/SubProfile';
import LatestUpdates from '../../components/LatestUpdates/latestUpdates.jsx';


function Document() {
    return (
        <div className="document-page">
            <div className="content-document">
                <div className="left-column-profile-document">
                    {/* Contenido de la primera columna */}
                </div>
                <div className="middle-column-profile-document">
                    <div className="profile-container-document">
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
                    <div className="menu-subprofile-document">
                        <SubProfile />
                    </div>
                    <div className="general-profile-container-document">
                        Document..
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Document;