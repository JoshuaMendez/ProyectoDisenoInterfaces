import './group.css';
import '../../assets/icons/css/bb-icons.css';

function Group({name, perfil, portada, tipo, foto1, foto2, foto3}) {
    return (
    <div class="profile-container-group">
        <div class="profile-header">
            <img src = {portada}  class="profile-banner-group"/>
            <div class="profile-ctn">
                <div class="profile-img-status">
                    <img src = {perfil} class="profile-pic-group"/>
                </div>
            </div>
            <div class="profile-data">
            <h2 class="nameGroup">{name}</h2>
            <span>{tipo} • joined </span>
            </div>
        </div>
        <div class = "group-down-part">
            <div class="group-participants">
                <img src = {foto1} class="profile-pic-down"/>
                <img src ={foto2} class="profile-pic-down"/>
                <img src = {foto3} class="profile-pic-down"/>
                <i className="bb-icon-ellipsis-h"></i>
            </div>
            <div class="group-btn"> 
                <div class = "botonDown">
                    <i className="bb-icon-check"></i>
                    <h4>Organizer</h4>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Group;