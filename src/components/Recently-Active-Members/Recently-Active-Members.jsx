import React from 'react';
import PropTypes from 'prop-types';
import './Recently-Active-Members.css';
import IconoFriend from './icono-friend/icono-friend.jsx';
import { Amigos2 } from "../../assets/dummyData/dummyData";


const Recently = () => {
    return (
        <div className="bloque-recently">
            <h2 id="titulo-recently">Recently Active Members</h2>
            <div className="amigos-recently">
                {Amigos2.map((Amigo, index) => (
                    <IconoFriend key={index} nombre={Amigos2.nombre} image={Amigos2.imagen} />
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
