import './group.css';
import '../../assets/icons/css/bb-icons.css';

function Group({name, perfil, portada, tipo, foto1, foto2, foto3}) {
    return (
    <div class="profile-container-group">
        <div class="profile-header">
            <img src = {portada} alt="" class="profile-banner-group"/>
            <div class="profile-ctn">
                <div class="profile-img-status">
                    <img src = {perfil} alt="" class="profile-pic-group"/>
                </div>
            </div>
            <div class="profile-data-group">
            <h2 class="nameGroup">{name}</h2>
            <span>{tipo} • joined </span>
            </div>
        </div>
        <div class = "group-down-part">
            <div class="group-participants">
                <img src = {foto1} alt="" class="profile-pic-down"/>
                <img src ={foto2} alt="" class="profile-pic-down"/>
                <img src = {foto3} alt="" class="profile-pic-down"/>
                <i className="bb-icon-ellipsis-h"></i>
            </div>
            <div class="group-btn"> 
                <button class = "botonDown">
                    <i className="bb-icon-check"></i>
                    <h4>Organizer</h4>
                </button>
            </div>
        </div>
    </div>
    );
}

export default Group;