import React from 'react';
import './groupes.css';
import Group from '../../components/group/group.jsx';
import { Grupos } from "../../assets/dummyData/dummyData";

function Groups() {
    return (
        <main className="content-photo">
            <aside className="left-column-profile-photo">{}</aside>
            <section className="middle-column-profile-photo">
                <div className="general-profile-container-college">
                    {Grupos.map((grupo, index) => (
                        <Group key={index} data={grupo} />
                    ))}
                </div>
            </section>
            <aside className="spacer-column-profile-photo">{}</aside>
        </main>
    );
}

export default Groups;
