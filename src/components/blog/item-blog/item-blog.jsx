
import React from 'react';
import './item-blog.css';


const ItemBlog = ({ image, title, date }) => {
        return (
            <div className="blog-item">
                <img src={image} alt={title} className="blog-image" />
                <div className="blog-contenido">
                    <h3 className="blog-title">{title}</h3>
                    <p className="blog-date">{date}</p>
                </div>
            </div>
        );
    };


export default ItemBlog;