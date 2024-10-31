import React from 'react';
import './icono-friend.css';

const IconoFriend = ({ imagen }) => {
    return (
        <div className="img-perfil">
            <img src={imagen} alt="" />
        </div>
    );
}

export default IconoFriend;
