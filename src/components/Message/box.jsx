import React, { useState } from 'react';
import './box.css';
import '../../assets/icons/css/bb-icons.css';
import Chat from './chat/chat.jsx';
import Mensaje from './mensaje/mensaje.jsx';

const Box = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [messages, setMessages] = useState([
        {
            fecha: "18 Sep 2024",
            descripcion: "You: Te amo Joshua",
            nombre: "Juliana Sanchez",
            image: "https://media.licdn.com/dms/image/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_200_200/0/1715274045600?e=2147483647&v=beta&t=6fvPqhD8LWK_kcsVnpNEvkyTyOLI-APzYCUKhC34MxA"
        }
    ]);
    const [isFlying, setIsFlying] = useState(false);

    const handleSend = () => {
        setIsFlying(true); // Activar la animación de vuelo

        // Desactivar la animación después de 2 segundos (la duración de la animación)
        setTimeout(() => {
            setIsFlying(false);
        }, 2000);
    };

    return (
        <div className="bloque-box">
            <div id="box-left">
                <header id="header-box">
                    <h2>Messages</h2>
                    <ul>
                        <li><i className="bb-icon-ellipsis-h" aria-label="More options"></i></li>
                        <li><i className="bb-icon-edit" aria-label="Edit messages"></i></li>
                    </ul>
                </header>
                <div id="search-box">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                </div>
                <div id="list-chats">
                    {messages.map((chat, index) => (
                        <Chat key={index} fecha={chat.fecha} descripcion={chat.descripcion} nombre={chat.nombre} image={chat.image} />
                    ))}
                </div>
            </div>

            <div id="box-right">
                <header id="header-chat">
                    <img src={messages[0].image} alt={messages[0].nombre} />
                    <div id="nombre-chat">
                        <h2>{messages[0].nombre}</h2>
                    </div>
                    <div id="icono-chat">
                        <i className="bb-icon-ellipsis-h" aria-label="More options"></i>
                    </div>
                </header>
                <div id="chat">
                    <h3 id="fecha">April 7, 2020</h3>
                    <Mensaje 
                        nombre="Juliana" 
                        mensaje="Joshua me ignora" 
                        hora="3:00 AM" 
                        image={messages[0].image} 
                    />
                </div>
                <div id="teclado">
                    <input type="text" placeholder="Type a message" />
                    <div id="icono-teclado">
                        <div id="iconos-left">
                            <ul>
                                <li><i className="bb-icon-camera" aria-label="Send a photo"></i></li>
                                <li><i className="bb-icon-brand-zoom" aria-label="Zoom"></i></li>
                                <li><i className="bb-icon-file-attach" aria-label="Attach a file"></i></li>
                                <li><i className="bb-icon-gif" aria-label="Send a GIF"></i></li>
                            </ul>
                        </div>
                        <div id="iconos-right">
                            <ul>
                                <li><i className="bb-icon-font" aria-label="Change font"></i></li>
                                <li><i className="bb-icon-emoticon-smile" aria-label="Insert emoji"></i></li>
                                {/* Aquí está el contenedor del botón con animación */}
                                <div className="icon-container">
                                    <button onClick={handleSend}>
                                        <i className={`bb-icon-paper-plane ${isFlying ? 'sendFlying' : ''}`}></i>
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;
