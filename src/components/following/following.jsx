import React from 'react';
import './following.css';
import '../../assets/icons/css/bb-icons.css';
import IconoFriend from './icono-friend/icono-friend.jsx';
import bla from '../../assets/images/person/1.png'
const amigos = [
    {
        nombre: 'Isabella Pacheco',
        imagen: 'https://media.licdn.com/dms/image/v2/D4E03AQGUnF-fto0ZeQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723948377144?e=2147483647&v=beta&t=_2n7ephi68j0SipR2Oqy1GC7MlSEjPhfzJjgW378FEQ'
    },
    {
        nombre: 'Jane Smith',
        imagen: bla
    },
    {
        nombre: 'Sam Wilson',
        imagen: 'path/to/sam_image.jpg'
    }
];
const Following = ({nAmigos}) => {
    return (
        <div class = "bloque-following">
            <h2 id = "titulo-following">I'm Following <span id = "numero-folowing">{nAmigos}</span></h2>
            <div class = "amigos">
            {amigos.slice(0, nAmigos).map((amigo, index) => (
                <IconoFriend key={index} nombre={amigo.nombre} imagen={amigo.imagen} />
            ))}
            </div>

        </div>
    );
}

export default Following;