import './ProfileComponent.css';

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
                <span><strong>{social}</strong></span>
            </div>
        </div>
        <div class="profile-data">
            <div class="following-data">
                <span><strong className="number-profile-component">{followers}</strong> followers </span>
                <span><strong className="number-profile-component">{following}</strong> following </span>
            </div>
            <div class="user-data">
                <h2 class="name">{name}</h2>
                <span>@john • joined {joined}</span>
            </div>
            <div class="user-social">
                <i class="bb-icon-rf bb-icon-brand-facebook"></i>
                <i class="bb-icon-rf bb-icon-brand-youtube"></i>
                <i class="bb-icon-rf bb-icon-brand-twitter"></i>
            </div>
        </div>
    </div>

    );
}

export default UserProfileComponent;