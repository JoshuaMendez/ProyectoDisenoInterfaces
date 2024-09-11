import './barra-navegacion-superior.css';
import { ButtonBarra } from './button/button-barra.jsx';
export const BarraNavegacionSuperior = () => {
    return (
        <div className="BarraNavegacionSuperior">
        <ButtonBarra nombre="Perfil" imagen='https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg'/>
        </div>
    );
    }