import React from 'react';
import './groupes.css'
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx'; // Asegúrate de que la ruta sea correcta
import SubProfile from '../../components/SubProfile/SubProfile';
import Group from '../../components/group/group.jsx';

function Groups() {
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
                    <div className="general-profile-container-college">
                                <Group
                                name = "Juliana lovers"
                                perfil="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                foto1="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                foto2="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                foto3="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                tipo = "Public"
                                portada = "https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                />
                                    <Group
                                name = "Juliana lovers"
                                perfil="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                foto1="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                foto2="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                foto3="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                tipo = "Public"
                                portada = "https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                />
                                    <Group
                                name = "Juliana lovers"
                                perfil="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                foto1="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                foto2="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                foto3="https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                tipo = "Public"
                                portada = "https://www.cidob.org/sites/default/files/styles/max_width_290/public/2024-10/Putin.jpg.webp?itok=Oll3K22Y"
                                />
                    
                        </div>
                    </div>
                </div>
                <div className="spacer-column-profile-photo">
                    {/* Columna vacía para separar las columnas */}
                </div>
            </div>
    );
}

export default Groups;