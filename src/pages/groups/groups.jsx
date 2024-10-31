import React from 'react';
import './groupes.css'
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx'; // Asegúrate de que la ruta sea correcta
import SubProfile from '../../components/SubProfile/SubProfile';
import Group from '../../components/group/group.jsx';

function Groups() {
    return (
            <div className="content-photo">
                <div className="left-column-profile-photo">{}</div>
                    <div className="middle-column-profile-photo">
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
                <div className="spacer-column-profile-photo">{}</div>
            </div>
    );
}

export default Groups;