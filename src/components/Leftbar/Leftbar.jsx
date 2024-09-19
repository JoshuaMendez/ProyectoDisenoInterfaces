// Leftbar.jsx
import React from 'react';
import './Leftbar.css';
import '../../assets/icons/css/bb-icons.css'; // Ensure this path is correct
import { Link } from 'react-router-dom'; 

const Leftbar = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div>
                {isExpanded && (
                    <div className = "barExpandida">
                        <div id = "header-desplegable">
                            <i className="bb-icon-sidebar" id="desplegable" onClick={handleToggle}></i>
                        </div>
                        <div className='rellenoBarExpandida'>
                        <ul className='icon-list-left'>
                        <h4>PERSONAL</h4>
                        <li><i className="bb-icon-user"></i><span>My Profile</span></li>
                        <li><i className="bb-icon-activity"></i><span>My Timeline</span></li>
                        <li>
                            <Link to="/messages">
                                <i className="bb-icon-inbox"></i><span>My Inbox</span>
                            </Link>
                        </li>
                        <h4>COMMUNITY</h4>
                        <li><i className="bb-icon-users"></i><span>My Groups</span></li>
                        <li><i className="bb-icon-users"></i><span>My Connections</span></li>
                        <li><i className="bb-icon-comments-square"></i><span>My Discussions</span></li>     
                        <li><i className="bb-icon-graduation-cap"></i><span>My Courses</span></li> 
                        <h4>MEDIA</h4> 
                        <li><i className="bb-icon-image"></i><span>My Photos</span></li>
                        <li><i className="bb-icon-folder-alt"></i><span>My Documents</span></li>     
                        <li><i className="bb-icon-cog"></i><span>Account Settings</span></li> 
                        </ul>
                        </div>
                    </div>
                )}
                    {!isExpanded && (
                    <div className='leftbar'>
                        <div id = "header-desplegable">
                            <i className="bb-icon-sidebar" id="desplegable" onClick={handleToggle}></i>
                        </div>
                        <ul className='icon-list-left'>
                        <li><i className="bb-icon-user"></i></li>
                        <li><i className="bb-icon-activity"></i></li>
                        <li>
                            <Link to="/messages">
                            <i className="bb-icon-inbox"></i>
                            </Link>
                        </li>
                        <li><div className='divider-horizontal'></div></li>
                        <li><i className="bb-icon-users"></i></li>
                        <li><i className="bb-icon-users"></i></li>
                        <li><i className="bb-icon-comments-square"></i></li>     
                        <li><i className="bb-icon-graduation-cap"></i></li> 
                        <li><div className='divider-horizontal'></div></li>  
                        <li><i className="bb-icon-image"></i></li>
                        <li><i className="bb-icon-folder-alt"></i></li>     
                        <li><i className="bb-icon-cog"></i></li> 
                        </ul>
                    </div>
                )}         
            
        </div>
    );
}

export default Leftbar;