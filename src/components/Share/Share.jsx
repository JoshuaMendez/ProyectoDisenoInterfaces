import React from 'react';
import './Share.css';
import man from '../../assets/images/person/1.png';

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={man} alt="Profile" />
                    <input
                        placeholder="Share what's on your mind, John..."
                        className="shareInput"
                        aria-label="Share what's on your mind"
                    />
                </div>
            </div>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <span className="bb-icon-f bb-icon-camera shareIcon" aria-label="Camera"></span>
                    </div>
                    <div className="shareOption">
                        <span className="bb-icon-f bb-icon-video shareIcon" aria-label="Video"></span>
                    </div>
                    <div className="shareOption">
                        <span className="bb-icon-f bb-icon-attach shareIcon" aria-label="Attach"></span>
                    </div>
                    <div className="shareOption">
                        <span className="bb-icon-f bb-icon-gif shareIcon" aria-label="GIF"></span>
                    </div>
                    <div className="shareOption">
                        <span className="bb-icon-f bb-icon-poll shareIcon" aria-label="Poll"></span>
                    </div>
                </div>
                <button className="bb-icon-f bb-icon-location-arrow shareButton" aria-label="Share"></button>
            </div>
        </div>
    );
}

export default Share;
