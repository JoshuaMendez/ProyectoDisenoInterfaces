import "./GeneralProfile.css";
import { useState } from "react";
import React from 'react';

export default function Post({ post }) {
    return (
        <div className="general-profile-container">
            <div className="general-profile-inner-section">
                <div className="general-profile-first">
                    <h1>General Information</h1>
                </div>
                <div className="general-profile-divider">
                    <div className='general-profile-divider-line'></div>
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
        </div>
    );
}