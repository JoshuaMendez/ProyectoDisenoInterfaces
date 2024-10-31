import React from 'react';
import './blog.css';
import '../../assets/icons/css/bb-icons.css';
import ItemBlog from './item-blog/item-blog.jsx';

const blogPosts = [
    {
        image: 'https://www.tarlogic.com/wp-content/uploads/2023/09/riesgos-seguridad-IA-3.jpg',
        title: 'La IA y el futuro de la humanidad',
        date: '2024-09-01'
    },
    {
        image: 'https://latam.kaspersky.com/content/es-mx/images/repository/isc/2020/cyber-security-article.jpg',
        title: 'La ingeniería social y la ciberseguridad',
        date: '2024-10-02'
    },
    {
        image: 'https://www.grupocibernos.com/hs-fs/hubfs/50.png?width=960&name=50.png',
        title: 'La ciberseguridad en la nube',
        date: '2024-09-11'
    }
];

const Blog = () => {
    return (
        <section className="bloque-blog">
            <header className="title-blog">
                <h2>Blog</h2>
            </header>
            <div className="post-blog">
                {blogPosts.map((post, index) => (
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
