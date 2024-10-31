import React from 'react';
import './ProfilePage.css';
import GeneralProfile from '../../components/GeneralProfile/GeneralProfile';

function ProfilePage() {
    return (
        <main className="content-profile">
            <aside className="left-column-profile"></aside>
            <section className="middle-column-profile">
                <GeneralProfile />
            </section>
            <aside className="spacer-column-profile"></aside>
        </main>
    );
}

export default ProfilePage;
