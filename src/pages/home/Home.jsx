import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
// import Navbar from '../../components/Navbar/Navbar.jsx'
// import Leftbar from '../../components/Leftbar/Leftbar.jsx'
import Blog from '../../components/blog/blog.jsx';
import Share from '../../components/Share/Share.jsx';
import Feed from '../../components/Feed/Feed.jsx';
import Following from '../../components/following/following.jsx';

function Home() {
    return (
        <main className='columns'>
            <section className='column'>
                <Blog />
                <Following />
            </section>
            <section className='column'>
                <header className='seccion'>
                    <h1 className='activity-feed-title'>Activity Feed</h1>
                </header>
                <Share />
                <Feed />
            </section>
        </main>
    );
}

export default Home;
