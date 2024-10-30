import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import LeftBar from '../../components/Leftbar/Leftbar';
import Group from '../../components/group/group.jsx';

function Groups() {
    return ( 
        <div className="groups-page">
            <Group/>
            <div className="content-groups">
            </div>
        </div>
    );
}

export default Groups;