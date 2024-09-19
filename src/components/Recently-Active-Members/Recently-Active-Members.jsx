import React from 'react';
import './Recently-Active-Members.css';
import IconoFriend from './icono-friend/icono-friend.jsx';
const amigos = [
    {
        nombre: 'John Doe',
        imagen: "../../assets/images/person/1.png"
    },
    {
        nombre: 'Jane Smith',
        imagen: '../../assets/images/person/2.png'
    },
    {
        nombre: 'Sam Wilson',
        imagen: '../../assets/images/person/3.png'
    },
    {
        nombre: 'Sam Wilson',
        imagen: '../../assets/images/person/4.png'
    },
    {
        nombre: 'Sam Wilson',
        imagen: '../../assets/images/person/5.png'
    },
    {
        nombre: 'Sam Wilson',
        imagen: '../../assets/images/person/6.png'
    },
    {
        nombre: 'Sam Wilson',
        imagen: '../../assets/images/person/7.png'
    },
    {
        nombre: 'Sam Wilson',
        imagen: '../../assets/images/person/8.png'
    }
];
const Recently = ({nAmigos}) => {
    return (
        <div class = "bloque-recently">
            <h2 id = "titulo-recently">Recently Active Members</h2>
            <div class = "amigos-recently">
                {amigos.map((amigo) => (
                    <IconoFriend nombre = {amigo.nombre} image = {amigo.imagen}/>
                ))}
            </div>
            <div>
                <button id = "boton-seeAll-recently">See all</button>
            </div>

        </div>
    );
}

export default Recently;