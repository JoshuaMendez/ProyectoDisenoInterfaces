import React from 'react';
import PropTypes from 'prop-types';
import './Recently-Active-Members.css';
import IconoFriend from './icono-friend/icono-friend.jsx';
import image1 from "../../assets/images/person/1.png";
import image2 from "../../assets/images/person/2.png";
import image3 from "../../assets/images/person/3.png";
import image4 from "../../assets/images/person/4.png";
import image5 from "../../assets/images/person/5.png";
import image6 from "../../assets/images/person/6.png";
import image7 from "../../assets/images/person/7.png";
import image8 from "../../assets/images/person/8.png";

const amigos = [
    { nombre: 'John Doe', imagen: image1 },
    { nombre: 'Jane Smith', imagen: image2 },
    { nombre: 'Sam Wilson', imagen: image3 },
    { nombre: 'Sam Wilson', imagen: image4 },
    { nombre: 'Sam Wilson', imagen: image5 },
    { nombre: 'Sam Wilson', imagen: image6 },
    { nombre: 'Sam Wilson', imagen: image7 },
    { nombre: 'Sam Wilson', imagen: image8 }
];

const Recently = () => {
    return (
        <div className="bloque-recently">
            <h2 id="titulo-recently">Recently Active Members</h2>
            <div className="amigos-recently">
                {amigos.map((amigo, index) => (
                    <IconoFriend key={index} nombre={amigo.nombre} image={amigo.imagen} />
                ))}
            </div>
            <div>
                <button id="boton-seeAll-recently">See all</button>
            </div>
        </div>
    );
}

// Validación de Props
Recently.propTypes = {
    nAmigos: PropTypes.number, // Si decides usarlo más adelante
};

export default Recently;
