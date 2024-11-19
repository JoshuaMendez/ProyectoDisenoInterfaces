import React, { useState, useEffect } from 'react';
import './box.css';
import '../../assets/icons/css/bb-icons.css';
import Chat from './chat/chat.jsx';
import Mensaje from './mensaje/mensaje.jsx';
import EmojiPicker from 'emoji-picker-react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch('GPRTssyjzZTiB5h4mhZGymgkFYR6cqv5'); // Reemplaza con tu API Key de Giphy

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
    const [inputValue, setInputValue] = useState('');
    const [isFlying, setIsFlying] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showGifPicker, setShowGifPicker] = useState(false);

    // Maneja el envío del mensaje con animación de avión de papel
    const handleSend = () => {
        setIsFlying(true);
        setTimeout(() => {
            setIsFlying(false);
        }, 2000);
    };

    // Toggle para mostrar y ocultar el picker de emoji
    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
        setShowGifPicker(false); // Cierra el picker de GIFs si está abierto
    };

    // Toggle para mostrar y ocultar el picker de GIFs
    const toggleGifPicker = () => {
        setShowGifPicker(!showGifPicker);
        setShowEmojiPicker(false); // Cierra el picker de emojis si está abierto
    };

    // Maneja la selección de un emoji
    const onEmojiClick = (emojiObject) => {
        setInputValue((prevInput) => prevInput + emojiObject.emoji);
        setShowEmojiPicker(false);
    };

    const fetchGifs = async (offset) => {
        try {
            const response = await gf.trending({ offset, limit: 10 });
            console.log(response); // Esto te ayudará a ver si la API responde correctamente
            if (response.data && response.data.length > 0) {
                return response.data;  // Devuelve los GIFs si la respuesta es válida
            } else {
                console.error('No GIFs found.');
                return [];  // Si no se encuentran GIFs, devuelve un array vacío
            }
        } catch (error) {
            console.error('Error fetching GIFs:', error);  // Maneja el error si la solicitud falla
            return [];  // Devuelve un array vacío en caso de error
        }
    };

    // Maneja la selección de un GIF
    const onGifSelect = (gif) => {
        setInputValue((prevInput) => prevInput + `![GIF](${gif.url})`);  // Inserta el GIF como una URL en markdown
        setShowGifPicker(false); // Cierra el picker tras seleccionar un GIF
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
                    <input 
                        type="text" 
                        placeholder="Type a message"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div id="icono-teclado">
                        <div id="iconos-left">
                            <ul>
                                <li><i className="bb-icon-camera" aria-label="Send a photo"></i></li>
                                <li><i className="bb-icon-brand-zoom" aria-label="Zoom"></i></li>
                                <li><i className="bb-icon-file-attach" aria-label="Attach a file"></i></li>
                                <li><i className="bb-icon-gif" aria-label="Send a GIF" onClick={toggleGifPicker}></i></li>
                            </ul>
                        </div>
                        <div id="iconos-right">
                            <ul>
                                <li>
                                    <i 
                                        className="bb-icon-emoticon-smile"
                                        aria-label="Insert emoji"
                                        onClick={toggleEmojiPicker}
                                    ></i>
                                </li>
                                <div className="icon-container">
                                    <button onClick={handleSend}>
                                        <i className={`bb-icon-paper-plane ${isFlying ? 'sendFlying' : ''}`}></i>
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {showEmojiPicker && (
                        <div className="emoji-picker-container">
                            <EmojiPicker onEmojiClick={onEmojiClick} />
                        </div>
                    )}
                    {showGifPicker && (
                        <div className="gif-picker-container">
                            <Grid
                                fetchGifs={fetchGifs}
                                width={300}
                                columns={3}
                                gutter={6}
                                onGifClick={onGifSelect}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Box;
