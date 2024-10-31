import React from 'react';
import './chat.css';

const Chat = ({ nombre, image, descripcion, fecha }) => {
    return (
        <div className="bloque-chat">
            <img src={image} alt={`Profile of ${nombre}`} />
            <div id="info-chat">
                <h4>{nombre}</h4>
                <span className="message-content">
                    {descripcion}
                    <span>
                        <br />
                        <time>{fecha}</time>
                    </span>
                </span>
            </div>
        </div>
    );
}

export default Chat;
