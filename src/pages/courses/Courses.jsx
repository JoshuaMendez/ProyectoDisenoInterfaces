import React from 'react';
import './Courses.css'
import Curso from '../../components/curso/curso.jsx'

function Courses() {
    return (
        <div className="content-course">
            <div className="left-column-profile-course">{}</div>
            <div className="middle-column-profile-course">
                <div className="general-profile-container-course">
                    <div className="container-course">
                        <Curso portada="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2024/07/19/halo-p.jpeg" titulo="HALO 1" cantidadLessons={10}/>
                    </div>
                    <div className="container-course">
                        <Curso portada="https://th.bing.com/th/id/R.4bb42aa1ee4f35ffcc637113f77fd945?rik=pcFQwdexbos%2b5Q&riu=http%3a%2f%2frecla.org%2fwp-content%2fuploads%2f2023%2f04%2fel-arte-generado-por-inteligencia-artificial-transformara-la-educacion-en-las-facultades-de-diseno-grafico-scaled.jpg&ehk=mwOLSxpdbwEwm41mahCi2omb8TaxybR%2fv2YivhMA4ys%3d&risl=&pid=ImgRaw&r=0" titulo="DiSEÑO DIGITAL PARA PRINCIPIANTES" cantidadLessons={14}/>
                    </div>
                    <div className="container-course">
                        <Curso portada="https://th.bing.com/th/id/R.bd4f6f8740da45d8adb967055f62af11?rik=v0MWThtLynjxsA&pid=ImgRaw&r=0" titulo="¿CÓMO ORGANIZAR MIS TAREAS?" cantidadLessons={7}/>
                    </div>
                    </div>
            </div>
        </div>
    );
}
export default Courses;