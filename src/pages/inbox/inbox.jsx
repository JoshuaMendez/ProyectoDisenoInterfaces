import React from 'react';
// timeline copia de profilepage
import Navbar from '../../components/Navbar/Navbar';
import LeftBar from '../../components/Leftbar/Leftbar';
import Box from '../../components/Message/box.jsx';


function Inbox() {
    return ( 
        <div className="inbox-page">
            <Navbar />
            <LeftBar />
            <div className="content-inbox">
                <Box></Box>
            </div>
        </div>
    );
}

export default Inbox;