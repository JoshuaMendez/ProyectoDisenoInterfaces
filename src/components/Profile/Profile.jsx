import './Profile.css';
import man from '../../assets/images/person/1.png';

function Profile() {
    return (
        <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
            <img className="shareProfileImg" src={man} alt="Profile"/>
            <input
                placeholder="Share what's on your mind, John..."
                className="shareInput"
            />
            </div>
        </div>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <span className="bb-icon-f bb-icon-camera shareIcon"></span>
                </div>
                <div className="shareOption">
                    <span className="bb-icon-f bb-icon-video shareIcon"></span>
                </div>
                <div className="shareOption">
                    <span className="bb-icon-f bb-icon-attach shareIcon"></span>
                </div>
                <div className="shareOption">
                    <span className="bb-icon-f bb-icon-gif shareIcon"></span>
                </div>
                <div className="shareOption">
                    <span className="bb-icon-f bb-icon-poll shareIcon"></span>
                </div>
            </div>
            <button className="bb-icon-f bb-icon-location-arrow shareButton"></button>
        </div>
    </div>
    );
}

export default Profile;