import './group.css';
import '../../assets/icons/css/bb-icons.css';

function Group({name, perfil, portada, tipo, foto1, foto2, foto3}) {
    return (
    <section className="profile-container-group">
        <header className="profile-header">
            <img src={portada} alt="" className="profile-banner-group" />
            <div className="profile-ctn">
                <figure className="profile-img-status">
                    <img src={perfil} alt="" className="profile-pic-group" />
                </figure>
            </div>
            <div className="profile-data-group">
                <h2 className="nameGroup">{name}</h2>
                <span>{tipo} • joined</span>
            </div>
        </header>
        <div className="group-down-part">
            <div className="group-participants">
                <img src={foto1} alt="" className="profile-pic-down" />
                <img src={foto2} alt="" className="profile-pic-down" />
                <img src={foto3} alt="" className="profile-pic-down" />
                <i className="bb-icon-ellipsis-h"></i>
            </div>
            <div className="group-btn"> 
                <button className="botonDown">
                    <i className="bb-icon-check"></i>
                    <h4>Organizer</h4>
                </button>
            </div>
        </div>
    </section>
    );
}

export default Group;
