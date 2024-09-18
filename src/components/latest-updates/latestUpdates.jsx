
import React from 'react';
import './latestUpdates.css';
import '../../assets/icons/css/bb-icons.css';
import ItemUpdates from './item-updates/item-updates.jsx';

const updates = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnXe_ieqBthtJEu_APkg9ECuUwhIOI4IVtg&s',
        title: 'John posted an update',
        date: '3 years ago'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnXe_ieqBthtJEu_APkg9ECuUwhIOI4IVtg&s',
        title: 'Adele posted an update',
        date: '3 years ago'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnXe_ieqBthtJEu_APkg9ECuUwhIOI4IVtg&s',
        title: 'John posted an update ',
        date: '3 years ago'
    }
];

const  LatestUpdates = () => {
    return (
        <div class = "bloque-updates">
            <h2>Latest Updates</h2>
            {updates.map((post, index) => (
                <ItemUpdates key = {index} image = {post.image} title = {post.title} date = {post.date}/>
            ))}
        </div>
    );
}

export default LatestUpdates;