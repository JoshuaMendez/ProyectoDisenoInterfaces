import React from 'react';
import '../timeline/timeline.css';
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx';
import SubProfile from '../../components/SubProfile/SubProfile';
import Feed from '../../components/Feed/Feed.jsx';
import Following from '../../components/following/following.jsx';
import Blog from '../../components/blog/blog.jsx';

function Timeline() {
    return (
        <div className="profile-page-timeline">
            <div className="content-timeline">
                <div className="left-column-profile-timeline">
                    {/* Contenido de la primera columna */}
                </div>
                <div className="middle-column-profile-timeline">
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
            </div>
        </div>
    );
}

export default Timeline;