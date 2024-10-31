import React, { useState } from 'react';
import './notifications.css';
import Chat from '../../Message/chat/chat';

export default function NotificationIcon() {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleMouseEnter = () => {
    setShowNotifications(true);
  };

  const handleMouseLeave = () => {
    setShowNotifications(false);
  };

  return (
    <div 
      className="notification-container" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      aria-label="Notificaciones"
      tabIndex={0} // Hace el contenedor accesible por teclado
    >
      <div className="notification-icon">
        <div className="bb-icon-l bb-icon-bell" />
      </div>
      {showNotifications && (
        <div className="notification-dropdown">
          <ul>
            <Chat 
              fecha="31 Oct 2024" 
              descripcion="Sebastián comentó en tu publicación" 
              image="https://media.licdn.com/dms/image/v2/D4E03AQFWLYd4U2IykQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726429797240?e=1735776000&v=beta&t=USojFEa4nB8DGcQHObU4CQx1OoXSrEx1Cu-EyJv3e8U" 
            />
            <Chat 
              fecha="1 Nov 2024" 
              descripcion="Juliana le gustó tu imagen" 
              image="https://media.licdn.com/dms/image/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_200_200/0/1715274045600?e=2147483647&v=beta&t=6fvPqhD8LWK_kcsVnpNEvkyTyOLI-APzYCUKhC34MxA" 
            />
            <Chat 
              fecha="3 Nov 2024" 
              descripcion="Esteban comentó en tu publicación" 
              image="https://akamai.sscdn.co/uploadfile/letras/fotos/a/7/f/b/a7fba5f1cd128cba1548e8a0aa5d6360.jpg" 
            />
          </ul>
        </div>
      )}
    </div>
  );
}
