import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import Navbar from '../../components/Navbar/Navbar.jsx'
import Leftbar from '../../components/Leftbar/Leftbar.jsx'
import Blog from '../../components/blog/blog.jsx'
import Share from '../../components/Share/Share.jsx'
import Post from '../../components/Post/Post.jsx'
import Feed from '../../components/Feed/Feed.jsx'
import LatestUpdates from '../../components/LatestUpdates/latestUpdates.jsx'
import Following from '../../components/following/following.jsx'


function Courses() {
    return (
        <div className='container-courses'>
        <Navbar />
        <Leftbar />
        
        </div>
    );
}

export default Courses;