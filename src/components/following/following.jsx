import React from 'react';
import './following.css';
import '../../assets/icons/css/bb-icons.css';
import IconoFriend from './icono-friend/icono-friend.jsx';

const amigos = [
    {
        nombre: 'Steven Spielberg',
        imagen: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww'
    },
    {
        nombre: 'Jane Smith',
        imagen: 'https://img.freepik.com/foto-gratis/apuesto-hombre-sonriente-confiado-manos-cruzadas-sobre-pecho_176420-18743.jpg?semt=ais_hybrid'
    },
    {
        nombre: 'Sam Wilson',
        imagen: 'https://images.ecestaticos.com/vU8sC8tLdkx-2YYh1fkOGL8vfeY=/0x0:990x557/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F62c%2Fe5d%2F314%2F62ce5d3141c0b670144a692b7f6a21fa.jpg'
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