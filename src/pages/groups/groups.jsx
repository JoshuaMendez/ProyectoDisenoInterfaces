import React from 'react';
import './groupes.css';
import Group from '../../components/group/group.jsx';

function Groups() {
    return (
        <main className="content-photo">
            <aside className="left-column-profile-photo">{}</aside>
            <section className="middle-column-profile-photo">
                <div className="general-profile-container-college">
                    <Group
                        name="MMA lovers"
                        perfil="https://a.espncdn.com/i/headshots/mma/players/full/3022677.png"
                        foto1="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/0ea5c-princesa-jazmin-disney-png.png?fit=500%2C500&ssl=1"
                        foto2="https://w7.pngwing.com/pngs/631/446/png-transparent-disney-princess-illustration-belle-princess-aurora-cinderella-rapunzel-princess-jasmine-beauty-and-the-beast-disney-princess-beast-doll-thumbnail.png"
                        foto3="https://w7.pngwing.com/pngs/23/472/png-transparent-princess-aurora-princess-jasmine-disney-princess-sleeping-beauty-aurora-princess-thumbnail.png"
                        tipo="Public"
                        portada="https://s3.sportstatics.com/relevo/www/multimedia/202210/05/media/cortadas/lozanoafl-RUQ4DDnR5W83otTnBP2qCcM-1200x648@Relevo.jpg"
                    />
                    <Group
                        name="AntiPetro"
                        perfil="https://preview.redd.it/fuera-petro-fuera-asesino-v0-9l3h46mnm2kd1.jpeg?auto=webp&s=3e10800023a0b3320b5cf0ecff1a23c6ecadb0b9"
                        foto1="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/0ea5c-princesa-jazmin-disney-png.png?fit=500%2C500&ssl=1"
                        foto2="https://w7.pngwing.com/pngs/631/446/png-transparent-disney-princess-illustration-belle-princess-aurora-cinderella-rapunzel-princess-jasmine-beauty-and-the-beast-disney-princess-beast-doll-thumbnail.png"
                        foto3="https://w7.pngwing.com/pngs/23/472/png-transparent-princess-aurora-princess-jasmine-disney-princess-sleeping-beauty-aurora-princess-thumbnail.png"
                        tipo="Public"
                        portada="https://cloudfront-us-east-1.images.arcpublishing.com/semana/ZBLN3LPTOBG6ZNLBZL7VHE55AE.jpg"
                    />
                    <Group
                        name="El mejor Presidente"
                        perfil="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtZWANkz6zvVLB9EIXrCtuA1UjvBu3rcYdg&s"
                        foto1="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/0ea5c-princesa-jazmin-disney-png.png?fit=500%2C500&ssl=1"
                        foto2="https://w7.pngwing.com/pngs/631/446/png-transparent-disney-princess-illustration-belle-princess-aurora-cinderella-rapunzel-princess-jasmine-beauty-and-the-beast-disney-princess-beast-doll-thumbnail.png"
                        foto3="https://w7.pngwing.com/pngs/23/472/png-transparent-princess-aurora-princess-jasmine-disney-princess-sleeping-beauty-aurora-princess-thumbnail.png"
                        tipo="Public"
                        portada="https://imagenes.elpais.com/resizer/v2/U6RLCK5DBNAFFO2KKEHPXVWNOY.jpg?auth=da6a83131da7456288001b8d32b8d6b48d57ff45eabc194f449f1aa8a32e5943&width=1960&height=1103&focal=2035%2C1108"
                    />
                </div>
            </section>
            <aside className="spacer-column-profile-photo">{}</aside>
        </main>
    );
}

export default Groups;
