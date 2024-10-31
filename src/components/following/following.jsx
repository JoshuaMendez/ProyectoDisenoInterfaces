import React from 'react';
import './following.css';
import '../../assets/icons/css/bb-icons.css';
import IconoFriend from './icono-friend/icono-friend.jsx';
import amg1 from '../../assets/images/person/2.png'
import amg2 from '../../assets/images/person/3.jpg'
import amg3 from '../../assets/images/person/4.jpg'
import amg4 from '../../assets/images/person/5.jpg'
import amg5 from '../../assets/images/person/6.jpg'

const amigos = [
    {
        nombre: 'Steven Spielberg',
        imagen: amg1
    },
    {
        nombre: 'Jane Smith',
        imagen: amg2
    },
    {
        nombre: 'Sam Wilson',
        imagen: amg3
    },
    {
        nombre: 'John Doe',
        imagen: amg4
    },
    {
        nombre: 'Jane Doe',
        imagen: amg5
    }
];

const Following = ({nAmigos}) => {
    return (
        <div className="bloque-following">
            <h2 id="titulo-following">I'm Following <span id="numero-folowing">{nAmigos}</span></h2>
            <div className="amigos">
                {amigos.slice(0, nAmigos).map((amigo, index) => (
                    <IconoFriend key={index} nombre={amigo.nombre} imagen={amigo.imagen} />
                ))}
            </div>
        </div>
    );
}

export default Following;