import React, { useState } from 'react';
import './notifications.css';
import Chat from '../../Message/chat/chat';
import { Notificaciones } from "../../../assets/dummyData/dummyData";

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
            {Notificaciones.map((data, index) => (
              <li key={index}>
                <Chat
                  image={data.image}
                  descripcion={data.descripcion}
                  fecha={data.fecha}
                  nombre={data.nombre}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
