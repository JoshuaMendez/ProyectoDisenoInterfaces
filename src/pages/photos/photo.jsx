import React from 'react';
// timeline copia de profilepage
import './photo.css';
import { Fotos } from "../../assets/dummyData/dummyData";
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
                        {Fotos.map((photo) => (
                                <img src={photo.foto} alt = {photo.foto} />
                        ))}
                    </div>
                </div>
            </section>
            <aside className="spacer-column-profile-photo"></aside>
        </main>
    );
}

export default Photo;
