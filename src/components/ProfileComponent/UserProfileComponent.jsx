import './ProfileComponent.css';
import man from '../../assets/images/person/1.png';

function UserProfileComponent({name, followers, following, joined, social, image, portada}) {
    return (
    <div class="profile-container">
        <div class="profile-header">
            <img src={portada} class="profile-banner"/>
            <div class="profile-ctn">
                <div class="profile-img-status">
                    <i class="fas fa-circle"></i>
                    <img src={image} class="profile-pic"/>
                </div>
                <span>{social}</span>
            </div>
        </div>
        <div class="profile-data">
            <div class="following-data">
                <span> {followers} followers </span>
                <span> {following} following </span>
            </div>
            <div class="user-data">
                <span class="name"> {name} </span>
                <span>Joined {joined}</span>
            </div>
            <div class="user-social">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-twitter"></i>
            </div>
        </div>
    </div>

    );
}

export default UserProfileComponent;