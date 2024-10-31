import React from 'react';
import '../timeline/timeline.css';
import Feed from '../../components/Feed/Feed.jsx';
import Following from '../../components/following/following.jsx';
import Blog from '../../components/blog/blog.jsx';

function Timeline() {
    return (
        <main className="content-timeline">
            <aside className="left-column-profile-timeline"></aside>
            <section className="middle-column-profile-timeline">
                <div className='firts-middle-column-timeline'>
                    <Following />
                    <br />
                    <Blog />
                </div>
                <div className="spacer-column-profile-timeline">
                    {/* Columna vacía para separar las columnas */}
                </div>
                <div className='Feed-timeline'>
                    <Feed />
                </div>
            </section>
            <aside className="spacer-column-profile-timeline"></aside>
        </main>
    );
}

export default Timeline;
