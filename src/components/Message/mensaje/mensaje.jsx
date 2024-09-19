
import React from 'react';
import './mensaje.css';




const Mensaje = ({image,mensaje,nombre,hora}) => {
    return (
        <div className = "bloque-mensaje">
            <img src={image} />
            <div id = "info-mensaje">
                <h2>{nombre}<span>{hora}</span></h2>
                <span class="contenido-mensaje">{mensaje}</span>
            </div>
        </div>
    );
}

export default Mensaje;