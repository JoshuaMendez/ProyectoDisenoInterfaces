
import React from 'react';
import './curso.css';
import '../../assets/icons/css/bb-icons.css';



const Curso = ({portada,titulo, cantidadLessons}) => {
    return (
        <div class = "bloque-curso">
            <div class = "portada-curso">
                <img src ={portada} alt="" ></img>
            </div>
            <div class = "informacion-curso">
                <div className="curso-detalles">
                    <span className="curso-lecciones">{cantidadLessons} Lecciones</span>
                    <h2 className="curso-titulo">{titulo}</h2>
                </div>
            </div>
            
        </div>
    );
}

export default Curso;