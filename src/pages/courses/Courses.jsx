import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'
import Navbar from '../../components/Navbar/Navbar';
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent.jsx'; // Asegúrate de que la ruta sea correcta
import LeftBar from '../../components/Leftbar/Leftbar';
import SubProfile from '../../components/SubProfile/SubProfile';
import LatestUpdates from '../../components/LatestUpdates/latestUpdates.jsx';
import Curso from '../../components/curso/curso.jsx'

function Courses() {
    return (
        <div className="course-page">
            <Navbar />
            <LeftBar />
            <div className="content-course">
                <div className="left-column-profile-course">
                    {/* Contenido de la primera columna */}
                </div>
                <div className="middle-column-profile-course">
                    <div className="profile-container-course">
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
                    <div className="menu-subprofile-course">
                        <SubProfile />
                    </div>
                    <div className="general-profile-container-course">
                        <div className="container-course">
                            <Curso portada="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2024/07/19/halo-p.jpeg" titulo="HALO 1 PARA PENDEJOS" cantidadLessons={10}/>
                        </div>
                        <div className="container-course">
                            <Curso portada="https://th.bing.com/th/id/R.4bb42aa1ee4f35ffcc637113f77fd945?rik=pcFQwdexbos%2b5Q&riu=http%3a%2f%2frecla.org%2fwp-content%2fuploads%2f2023%2f04%2fel-arte-generado-por-inteligencia-artificial-transformara-la-educacion-en-las-facultades-de-diseno-grafico-scaled.jpg&ehk=mwOLSxpdbwEwm41mahCi2omb8TaxybR%2fv2YivhMA4ys%3d&risl=&pid=ImgRaw&r=0" titulo="DiSEÑO DIGITAL PARA PRINCIPIANTES" cantidadLessons={14}/>
                        </div>
                        <div className="container-course">
                            <Curso portada="https://th.bing.com/th/id/R.bd4f6f8740da45d8adb967055f62af11?rik=v0MWThtLynjxsA&pid=ImgRaw&r=0" titulo="¿CÓMO ORGANIZAR MIS TAREAS?" cantidadLessons={7}/>
                        </div>
                      </div>
                </div>
                <div className="spacer-column-profile-course">
                    {/* Columna vacía para separar las columnas */}
                </div>
                <div className="right-column-profile-course">
                    <LatestUpdates />
                </div>
            </div>
        </div>
    );
}
export default Courses;