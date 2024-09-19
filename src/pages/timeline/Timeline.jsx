import React from 'react';
// timeline copia de profilepage
import '../timeline/timeline.css';
import Navbar from '../../components/Navbar/Navbar';
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx'; // Asegúrate de que la ruta sea correcta
import LeftBar from '../../components/Leftbar/Leftbar';
import SubProfile from '../../components/SubProfile/SubProfile';
import LatestUpdates from '../../components/LatestUpdates/latestUpdates.jsx'
import Feed from '../../components/Feed/Feed.jsx';
import Following from '../../components/following/following.jsx';
import Blog from '../../components/blog/blog.jsx';

function Timeline() {
    return (
        <div className="profile-page-timeline">
            <Navbar />
            <LeftBar />
            <div className="content-timeline">
                <div className="left-column-profile-timeline">
                    {/* Contenido de la primera columna */}
                </div>
                <div className="middle-column-profile-timeline">
                    <div className="profile-container-timeline">
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
                    <div className="menu-subprofile-timeline">
                        <SubProfile />
                    </div>
                    <div className='middle-colum-down-timeline'>
                        <div className='firts-middle-column-timeline'>
                            <Following></Following>
                            <br></br>
                            <Blog></Blog>
                        </div>
                        <div className="spacer-column-profile-timeline">
                             {/* Columna vacía para separar las columnas */}
                        </div>
                        <div className='Feed-timeline'>
                            <Feed></Feed>
                        </div>
                    </div>
                </div>
                <div className="spacer-column-profile-timeline">
                    {/* Columna vacía para separar las columnas */}
                </div>
                <div className="right-column-profile-timeline">
                    <LatestUpdates />
                </div>
            </div>
        </div>
    );
}

export default Timeline;