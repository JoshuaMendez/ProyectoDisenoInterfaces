import React from 'react';
import './blog.css';
import '../../assets/icons/css/bb-icons.css';
import ItemBlog from './item-blog/item-blog.jsx';
import { BlogPosts } from "../../assets/dummyData/dummyData";

const Blog = () => {
    return (
        <section className="bloque-blog">
            <header className="title-blog">
                <h2>Blog</h2>
            </header>
            <div className="post-blog">
                {BlogPosts.map((post, index) => (
                    <article key={index} className="blog-post">
                        <ItemBlog image={post.image} alt="" title={post.title} date={post.date} />
                    </article>
                ))}
            </div>
            <footer className="button-blog">
                <button id="boton-seeAll">See all</button>
            </footer>
        </section>
    );
}

export default Blog;
