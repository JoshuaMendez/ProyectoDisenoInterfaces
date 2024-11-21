import React, { useState, useEffect } from 'react';
import './box.css';
import '../../assets/icons/css/bb-icons.css';
import Chat from './chat/chat.jsx';
import Mensaje from './mensaje/mensaje.jsx';
import EmojiPicker from 'emoji-picker-react';
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
    const [gifs, setGifs] = useState([]);

    // Toggle para mostrar/ocultar el picker de emoji
    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
        setShowGifPicker(false); // Cierra el picker de GIFs
    };

    // Toggle para mostrar/ocultar el picker de GIFs
    const toggleGifPicker = () => {
        setShowGifPicker(!showGifPicker);
        setShowEmojiPicker(false); // Cierra el picker de emojis
    };

    // Manejo del envío del mensaje
    const handleSend = () => {
        setIsFlying(true);
        setTimeout(() => setIsFlying(false), 2000);
    };

    // Maneja la selección de un emoji
    const onEmojiClick = (emojiObject) => {
        setInputValue((prevInput) => prevInput + emojiObject.emoji);
        setShowEmojiPicker(false);
    };

    // Función para obtener los GIFs
    const fetchGifs = async (offset = 0) => {
        try {
            const response = searchTerm
                ? await gf.search(searchTerm, { offset, limit: 10 }) // Búsqueda personalizada
                : await gf.trending({ offset, limit: 10 }); // GIFs de tendencia
    
            console.log('Giphy API response:', response); // Ver respuesta de la API

            if (!response || !response.data || response.data.length === 0) {
                console.log('No GIF data found');
                setGifs([]); // Si no hay GIFs, setea un arreglo vacío
                return [];
            }
    
            setGifs(response.data); // Almacena los GIFs en el estado
        } catch (error) {
            console.error('Error fetching GIFs:', error);
            setGifs([]); // Si hay error, setea un arreglo vacío
        }
    };

    // Inserta el GIF seleccionado como HTML (imagen) en el input
    const onGifSelect = (gif) => {
        setInputValue((prevInput) => prevInput + `<img src="${gif.images.fixed_height.url}" alt="GIF" class="gif-preview" />`);
        setShowGifPicker(false);
    };

    useEffect(() => {
        if (searchTerm) {
            fetchGifs(); // Busca GIFs cuando cambia el término de búsqueda
        } else {
            fetchGifs(); // Si no hay término de búsqueda, carga los GIFs de tendencia
        }
    }, [searchTerm]);

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
                    <div 
                        id="message-input" 
                        contentEditable
                        placeholder="Type a message"
                        dangerouslySetInnerHTML={{ __html: inputValue }}  // Inserta el HTML (GIFs y texto)
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
                            <div className="gif-grid">
                                {gifs.length === 0 ? (
                                    <p>No GIFs found!</p>
                                ) : (
                                    gifs.map((gif, index) => (
                                        <img
                                            key={index}
                                            src={gif.images.fixed_height.url}  // Muestra el GIF
                                            alt="GIF"
                                            onClick={() => onGifSelect(gif)}  // Llama a onGifSelect al hacer clic
                                            className="gif-item"  // Aplica la clase para el estilo
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Box;
