import React from 'react';
import './latestUpdates.css';
import '../../assets/icons/css/bb-icons.css';
import ItemUpdates from './item-updates/item-updates.jsx';
import { Updates } from "../../assets/dummyData/dummyData";


const LatestUpdates = () => {
    return (
        <section className="bloque-updates">
            <h2 className="h2-title-latest">Latest Updates</h2>
            {Updates.map((post, index) => (
                <ItemUpdates key={index} image={post.image} title={post.title} date={post.date} />
            ))}
        </section>
    );
}

export default LatestUpdates;
