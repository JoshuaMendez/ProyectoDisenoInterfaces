import React, { useState } from 'react';
import './notifications.css';

export default function NotificationIcon({icon}) {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleMouseEnter = () => {
    setShowNotifications(true);
  };

  const handleMouseLeave = () => {
    setShowNotifications(false);
  };

  return (
    <div className="notification-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="notification-icon">
        <div className="bb-icon-l bb-icon-bell"/>
      </div>
      {showNotifications && (
        <div className="notification-dropdown">
          <ul>
            <li>Notificación 1</li>
            <li>Notificación 2</li>
            <li>Notificación 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
