import React, { useState } from 'react';
import './inboxInteractive.css';
import Chat from '../../Message/chat/chat';

export default function InboxIcon() {
  const [showMessages, setShowMessages] = useState(false);

  const handleMouseEnter = () => {
    setShowMessages(true);
  };

  const handleMouseLeave = () => {
    setShowMessages(false);
  };

  return (
    <div className="messages-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="message-icon">
        <div className="bb-icon-l bb-icon-inbox"/>
      </div>
      {showMessages && (
        <div className="messages-dropdown">
          <ul>
            <Chat fecha="18 Sep 2024" descripcion="Jul: Te amo Joshua" nombre = "Juliana Sanchez" image="https://media.licdn.com/dms/image/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_200_200/0/1715274045600?e=2147483647&v=beta&t=6fvPqhD8LWK_kcsVnpNEvkyTyOLI-APzYCUKhC34MxA"></Chat>
            <Chat fecha="19 Sep 2024" descripcion="Est: PA CUANDO 🥵" nombre = "Esteban Muñoz" image="https://akamai.sscdn.co/uploadfile/letras/fotos/a/7/f/b/a7fba5f1cd128cba1548e8a0aa5d6360.jpg"></Chat>
            <Chat fecha="18 Sep 2024" descripcion="Seb: Papasito Joshua 😈" nombre = "Emmanuel" image="https://media.licdn.com/dms/image/v2/D4E03AQGw9QkrArkzWg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726766539820?e=1732147200&v=beta&t=RYbabsNrO84Uivkog4eJWGEsT32zq7ih81x3uvglbzk"></Chat>
          
          </ul>
        </div>
      )}
    </div>
  );
}
