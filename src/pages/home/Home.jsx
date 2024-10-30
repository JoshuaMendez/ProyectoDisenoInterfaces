import React from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
// import Navbar from '../../components/Navbar/Navbar.jsx'
// import Leftbar from '../../components/Leftbar/Leftbar.jsx'
import Blog from '../../components/blog/blog.jsx'
// import Share from '../../components/Share/Share.jsx'
// import Post from '../../components/Post/Post.jsx'
import Feed from '../../components/Feed/Feed.jsx'
// import LatestUpdates from '../../components/LatestUpdates/latestUpdates.jsx'
import Following from '../../components/following/following.jsx'


function Home() {
    return (

            <div className='columns'>
                <div className='column'>
                    <Blog />
                    <Following />
                </div>
                <div className='column'>
                <div className='seccion'>
                    <h1 className='activity-feed-title'>Activity Feed</h1>
                </div>
                <Feed />
                </div>
            
            </div>
    );
}

export default Home;