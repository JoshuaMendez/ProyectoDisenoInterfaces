import React from 'react';
import './Courses.css';
import Curso from '../../components/curso/curso.jsx';
import { Cursos } from "../../assets/dummyData/dummyData";
function Courses() {
    return (
        <main className="content-course">
            <aside className="left-column-profile-course"></aside>
            <section className="middle-column-profile-course">
                <div className="general-profile-container-course">
                        {Cursos.map((curso, index) => (
                            <div className="container-course">
                                <Curso key={index} data={curso} />
                            </div>
                        ))}
                </div>
            </section>
        </main>
    );
}

export default Courses;
