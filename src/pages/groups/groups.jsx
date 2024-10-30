import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import LeftBar from '../../components/Leftbar/Leftbar';
import Group from '../../components/group/group.jsx';
import SubProfile from '../../components/SubProfile/SubProfile.jsx';
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx';

function Groups() {
    return ( 
    <div className="profile-page">
            <div className="content-profile">
                <div className='left-column-profile'>{}</div>
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
                <div className="middle-column-profile">
                    <Group />
                </div>
            </div>
            <div className="spacer-column-profile">{}</div>
        </div>
    );
}

export default Groups;