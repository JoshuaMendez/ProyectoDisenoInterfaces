import React from 'react';
// timeline copia de profilepage
import './photo.css';

function Photo() {
    return (
        <main className="content-photo">
            <section className="middle-column-profile-photo">
                <div className="ctr-photos">
                    <header className="ctr-head">
                        <h3>Photos</h3>
                        <button className="btn-photos"> 
                            <h4>Add photos</h4>
                        </button>
                    </header>
                    <nav className="nav-photos"> 
                        <button className="btn-photos btn-active"> 
                            <h4>Photos</h4>
                        </button>
                        <button className="btn-photos"> 
                            <h4>Albums</h4>
                        </button>
                    </nav>
                    <div className="collegue-photos">
                        <img src="https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g" alt="Profile 1" />
                        <img src="https://media.infocielo.com/p/96ef799649590e895498d519b437bd03/adjuntos/299/imagenes/001/374/0001374794/887x0/smart/vladimir_putin_men_brown_bears_run_533027_1280x800jpg.jpg" alt="Profile 2" />
                        <img src="https://www.centrodemocratico.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-28-at-11.34.32-AM-1066x1012.jpeg" alt="Profile 3" />
                        <img src="https://juancarlosgarcesrojas.org/wp-content/uploads/2021/01/Dilian-Francisca-Toro-2022.jpg" alt="Profile 4" />
                        <img src="https://i.ytimg.com/vi/X1zV274aHPk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALyJg2p7COBhDp7KFGt7ZVx7y9Vw" alt="Profile 5" />
                        <img src="https://imagenes.elpais.com/resizer/v2/XCTB5ENE5NFSLMP4MDGQWUQMSQ.jpg?auth=ec6931cf19ff2a002171e9fcb8b117815bc8558f007068f6d1398de75e3b49bf&width=1200" alt="Profile 6" />
                        <img src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/l9lacsef2jipwxlvgrkg" alt="Profile 7" />
                        <img src="https://i.pinimg.com/736x/35/62/4a/35624a0b0121a1ce57e3612c3937fa2c.jpg" alt="Profile 8" />
                    </div>
                </div>
            </section>
            <aside className="spacer-column-profile-photo"></aside>
        </main>
    );
}

export default Photo;
