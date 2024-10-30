
import React from 'react';
import './chat.css';




const Chat = ({nombre,image,descripcion,fecha}) => {
    return (
        <div className = "bloque-chat">
            <img src={image} />
            <div id = "info-chat">
                <h4>{nombre}</h4>
                <span class="message-content">{descripcion}<span><br />•{fecha}</span></span>
            </div>
        </div>
    );
}

export default Chat;