
import React from 'react';
import './box.css';
import '../../assets/icons/css/bb-icons.css';
import Chat from './chat/chat.jsx';
import Mensaje from './mensaje/mensaje.jsx';


const Box = () => {
    return (
        <div className = "bloque-box">
        <div id = "box-left">
            <div id = "header-box">
                <h2>Messages</h2>
                <ul>
                    <li><i className="bb-icon-ellipsis-h" ></i></li>
                    <li><i className="bb-icon-edit"></i></li>
                </ul>
            </div>
        <div id = "search-box">
                <input type="text" placeholder="Search" />
        </div>
        <div id = "list-chats">
            <Chat fecha="18 Sep 2024" descripcion="You: Te amo Joshua" nombre = "Juliana Sanchez" image="https://media.licdn.com/dms/image/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_200_200/0/1715274045600?e=2147483647&v=beta&t=6fvPqhD8LWK_kcsVnpNEvkyTyOLI-APzYCUKhC34MxA"/>
        </div>
        </div>

        <div id = "box-right">
            <div id = "header-chat">
                <img src="https://media.licdn.com/dms/image/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_200_200/0/1715274045600?e=2147483647&v=beta&t=6fvPqhD8LWK_kcsVnpNEvkyTyOLI-APzYCUKhC34MxA" />

                <div id = "nombre-chat">
                    <h2>Juliana Sanchez</h2>
                </div>
                <div id = "icono-chat">
                    <i className="bb-icon-ellipsis-h" ></i>  
                </div>
            </div>
            <div id = "chat">
                <h3 id = "fecha">April 7, 2020</h3>
                <Mensaje nombre="Juliana" mensaje= "Jhosua gay" hora=" 3:00 AM" image="https://media.licdn.com/dms/image/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_200_200/0/1715274045600?e=2147483647&v=beta&t=6fvPqhD8LWK_kcsVnpNEvkyTyOLI-APzYCUKhC34MxA" />
            
            </div>
            <div id = "teclado">
                    <input type="text" placeholder="Type a message" />
                    <div id = "icono-teclado">
                        <div id = "iconos-left">
                            <ul>
                                <li><i className="bb-icon-camera"></i></li>
                                <li><i className="bb-icon-brand-zoom"></i></li>
                                <li><i className="bb-icon-file-attach"></i></li>
                                <li><i className="bb-icon-gif"></i></li>
                            </ul>
                        </div>
                        <div id = "iconos-right">
                            <ul>
                                <li><i className="bb-icon-font"></i></li>
                                <li><i className="bb-icon-emoticon-smile"></i></li>
                                <button><i className="bb-icon-location-arrow"></i></button>
                            </ul>
                            

                        </div>
                    </div>
            </div>
        </div> 
    </div>
    );
}

export default Box;