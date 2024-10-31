import React from 'react';
// timeline copia de profilepage
import './photo.css'
// import Navbar from '../../components/Navbar/Navbar';
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx'; // Asegúrate de que la ruta sea correcta
// import LeftBar from '../../components/Leftbar/Leftbar';
import SubProfile from '../../components/SubProfile/SubProfile';
// import GeneralProfile from '../../components/GeneralProfile/GeneralProfile'
// import LatestUpdates from '../../components/LatestUpdates/latestUpdates.jsx'


function Photo() {
    return (
        <div className="photo-page">
            <div className="content-photo">
                <div className="left-column-profile-photo">
                    {/* Contenido de la primera columna */}
                </div>
                <div className="middle-column-profile-photo">
                    <div className="profile-container-photo">
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
                    <div className="menu-subprofile-photo">
                        <SubProfile />
                    </div>
                    <div className="general-profile-container-photo">
                        <div class = "ctr-photos">
                            <div class ="ctr-head">
                                <h3>Photos</h3>
                                <button class="btn-photos"> 
                                    <h4>Add photos</h4>
                                </button>
                            </div>
                            <div class="nav-photos"> 
                                <button class="btn-photos btn-active"> 
                                    <h4>Photos</h4>
                                </button>
                                <button class="btn-photos"> 
                                    <h4>Albums</h4>
                                </button>
                            </div>
                            <div class = "collegue-photos">
                                <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                                <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                                <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                                <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                                <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                                <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-column-profile-photo">
                    {/* Columna vacía para separar las columnas */}
                </div>
            </div>
        </div>
    );
}

export default Photo;