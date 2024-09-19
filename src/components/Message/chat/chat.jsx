
import React from 'react';
import './chat.css';




const Chat = ({nombre,image,descripcion,fecha}) => {
    return (
        <div className = "bloque-chat">
            <img src={image} />
            <div id = "info-chat">
                <h2>{nombre}</h2>
                <span class="message-content">{descripcion}<span>•{fecha}</span></span>
            </div>
        </div>
    );
}

export default Chat;