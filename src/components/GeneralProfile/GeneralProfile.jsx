import "./GeneralProfile.css";
import React from 'react';

export default function Post({ post }) {
    return (
        <section className="general-profile-container">
            <div className="general-profile-inner-section">
                <header className="general-profile-first">
                    <h1>General Information</h1>
                </header>
                <div className="general-profile-divider">
                    <hr className="general-profile-divider-line" />
                </div>
                <div className="general-profile-information">
                    <div className="general-profile-atributes">
                        <ul>
                            <li>
                                <span className="label">First Name</span>
                            </li>
                            <li>
                                <span className="label">Last Name</span>
                            </li>
                            <li>
                                <span className="label">Nickname</span>
                            </li>
                            <li>
                                <span className="label">Birth Date</span>
                            </li>
                            <li>
                                <span className="label">Gender</span>
                            </li>
                        </ul>
                    </div>
                    <div className="general-profile-values">
                        <ul>
                            <li>
                                <span className="value">John</span>
                            </li>
                            <li>
                                <span className="value">Smith</span>
                            </li>
                            <li>
                                <span className="value">john</span>
                            </li>
                            <li>
                                <span className="value">September 15, 1995</span>
                            </li>
                            <li>
                                <span className="value">Male</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
