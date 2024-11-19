import './group.css';
import '../../assets/icons/css/bb-icons.css';

function Group({ data }) {
    return (
    <section className="profile-container-group">
        <header className="profile-header">
            <img src={data.portada} alt="" className="profile-banner-group" />
            <div className="profile-ctn">
                <figure className="profile-img-status">
                    <img src={data.perfil} alt="" className="profile-pic-group" />
                </figure>
            </div>
            <div className="profile-data-group">
                <h2 className="nameGroup">{data.name}</h2>
                <span>{data.tipo} • joined</span>
            </div>
        </header>
        <div className="group-down-part">
            <div className="group-participants">
                <img src={data.foto1} alt="" className="profile-pic-down" />
                <img src={data.foto2} alt="" className="profile-pic-down" />
                <img src={data.foto3} alt="" className="profile-pic-down" />
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
