import React from 'react';
import './item-updates.css';

const ItemUpdates = ({ image, title, date }) => {
    return (
        <article className="updates-item">
            <img src={image} alt={title} className="update-image" />
            <div className="update-contenido">
                <h3 className="update-title">{title}</h3>
                <p className="update-date">{date}</p>
            </div>
        </article>
    );
};

export default ItemUpdates;
