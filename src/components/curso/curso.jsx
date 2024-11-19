import React from 'react';
import './curso.css';
import '../../assets/icons/css/bb-icons.css';

const Curso = ({ data }) => {
    return (
        <article className="bloque-curso">
            <figure className="portada-curso">
                <img src={data.portada} alt={`Portada de ${data.titulo}`} />
            </figure>
            <section className="informacion-curso">
                <header className="curso-detalles">
                    <span className="curso-lecciones">{data.cantidadLessons} Lecciones</span>
                    <h2 className="curso-titulo">{data.titulo}</h2>
                </header>
            </section>
        </article>
    );
}

export default Curso;
