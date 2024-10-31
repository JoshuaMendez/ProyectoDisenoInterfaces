import React from 'react';
import './mensaje.css';

const Mensaje = ({ image, mensaje, nombre, hora }) => {
    return (
        <div className="bloque-mensaje">
            <img src={image} alt={`Profile of ${nombre}`} />
            <div id="info-mensaje">
                <h2>{nombre} <span><time>{hora}</time></span></h2>
                <span className="contenido-mensaje">{mensaje}</span>
            </div>
        </div>
    );
}

export default Mensaje;
