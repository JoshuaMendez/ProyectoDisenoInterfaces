import React from 'react';
import PropTypes from 'prop-types';
import './ProfileComponent.css';

function UserProfileComponent({ name, followers, following, joined, social, image, portada }) {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={portada} alt={`${name}'s banner`} className="profile-banner" />
                <div className="profile-ctn">
                    <div className="profile-img-status">
                        <i className="fas fa-circle" aria-hidden="true"></i>
                        <img src={image} alt={`${name}'s profile`} className="profile-pic" />
                    </div>
                    <span><strong>{social}</strong></span>
                </div>
            </div>
            <div className="profile-data">
                <div className="following-data">
                    <span><strong className="number-profile-component">{followers}</strong> followers </span>
                    <span><strong className="number-profile-component">{following}</strong> following </span>
                </div>
                <div className="user-data">
                    <h2 className="name">{name}</h2>
                    <span>@{social} • joined {joined}</span>
                </div>
                <div className="user-social">
                    {social && <i className="bb-icon-rf bb-icon-brand-facebook" aria-label="Facebook"></i>}
                    {social && <i className="bb-icon-rf bb-icon-brand-youtube" aria-label="YouTube"></i>}
                    {social && <i className="bb-icon-rf bb-icon-brand-twitter" aria-label="Twitter"></i>}
                </div>
            </div>
        </div>
    );
}

// Validación de Props
UserProfileComponent.propTypes = {
    name: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    joined: PropTypes.string.isRequired,
    social: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    portada: PropTypes.string.isRequired,
};

export default UserProfileComponent;
