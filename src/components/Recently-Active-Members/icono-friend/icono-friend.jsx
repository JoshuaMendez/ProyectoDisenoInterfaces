// import React from 'react';
import PropTypes from 'prop-types';
import './icono-friend.css';

const IconoFriend = ({ image, altText = "Imagen de perfil" }) => {
    return (
        <div className="img-perfil">
            <img src={image} alt={altText} />
        </div>
    );
}

// Validación de Props
IconoFriend.propTypes = {
    image: PropTypes.string.isRequired,
    altText: PropTypes.string,
};

export default IconoFriend;
