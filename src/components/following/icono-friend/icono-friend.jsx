
import React from 'react';
import './icono-friend.css';



const iconoFriend = ({image}) => {
    return (
        <div class = "img-perfil">
            <img src={image} alt="img-perfil"/>
        </div>
    );
}

export default iconoFriend;