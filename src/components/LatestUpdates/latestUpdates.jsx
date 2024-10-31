
import React from 'react';
import './latestUpdates.css';
import '../../assets/icons/css/bb-icons.css';
import ItemUpdates from './item-updates/item-updates.jsx';

const updates = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnXe_ieqBthtJEu_APkg9ECuUwhIOI4IVtg&s',
        title: 'John posted an update',
        date: '1 minute ago'
    },
    {
        image: 'https://a.ltrbxd.com/resized/sm/upload/db/2x/a6/v6/harrypotter-1200-1200-675-675-crop-000000.jpg?v=7f87bbd1ff',
        title: 'Adele posted an update',
        date: '20 minutes ago'
    },
    {
        image: 'https://th.bing.com/th/id/OIP.WGbPMH8cEmqepMQ_ZQ-i6wHaKD?rs=1&pid=ImgDetMain',
        title: 'Gabriel posted an update ',
        date: '1 hour ago'
    },
    {
        image: 'https://img001.prntscr.com/file/img001/sAKPdBnDSLOs8XC3cXTAXA.png',
        title: 'Daniela ghosted you ',
        date: '4 hour ago'
    }
];

const  LatestUpdates = () => {
    return (
        <div class = "bloque-updates">
            <h2 class = "h2-title-latest">Latest Updates</h2>
            {updates.map((post, index) => (
                <ItemUpdates key = {index} image = {post.image} title = {post.title} date = {post.date}/>
            ))}
        </div>
    );
}

export default LatestUpdates;