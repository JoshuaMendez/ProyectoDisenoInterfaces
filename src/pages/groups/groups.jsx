import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import LeftBar from '../../components/Leftbar/Leftbar';


function Groups() {
    return ( 
        <div className="groups-page">
            <Navbar />
            <LeftBar />
            <div className="content-groups">
            </div>
        </div>
    );
}

export default Groups;