import React from 'react';
import './curso.css';
import '../../assets/icons/css/bb-icons.css';

const Curso = ({ portada, titulo, cantidadLessons }) => {
    return (
        <article className="bloque-curso">
            <figure className="portada-curso">
                <img src={portada} alt={`Portada de ${titulo}`} />
            </figure>
            <section className="informacion-curso">
                <header className="curso-detalles">
                    <span className="curso-lecciones">{cantidadLessons} Lecciones</span>
                    <h2 className="curso-titulo">{titulo}</h2>
                </header>
            </section>
        </article>
    );
}

export default Curso;
