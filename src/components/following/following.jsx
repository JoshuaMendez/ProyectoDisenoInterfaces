import React from 'react';
import './following.css';
import '../../assets/icons/css/bb-icons.css';
import IconoFriend from './icono-friend/icono-friend.jsx';
import { Amigos } from "../../assets/dummyData/dummyData";

const Following = ({ nAmigos }) => {
    return (
        <section className="bloque-following">
            <header>
                <h2 id="titulo-following">
                    I'm Following <span id="numero-following">{nAmigos}</span>
                </h2>
            </header>
            <div className="amigos">
                {Amigos.slice(0, nAmigos).map((amigo, index) => (
                    <article key={index} className="amigo">
                        <IconoFriend nombre={amigo.nombre} imagen={amigo.imagen} />
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Following;
