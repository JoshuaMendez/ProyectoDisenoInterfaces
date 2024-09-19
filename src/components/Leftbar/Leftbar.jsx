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
                        <li>
                            <Link to="/profile">
                                <i className="bb-icon-user"></i><span>My Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/timeline">
                                <i className="bb-icon-activity"></i><span>My Timeline</span>
                            </Link>
                        </li>
                        
                        <h4>COMMUNITY</h4>
                        <li>
                            <Link to="/groups">
                            <i className="bb-icon-users"></i><span>My Groups</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/messages">
                            <i className="bb-icon-comments-square"></i><span>My Discussions</span>
                            </Link>
                        </li>     
                        <li>
                            <Link to="/courses">
                                <i className="bb-icon-graduation-cap"></i><span>My Courses</span>
                            </Link>
                        </li>
                        <h4>MEDIA</h4> 
                        <li>
                            <Link to="/photo">
                                <i className="bb-icon-image"></i><span>My Photos</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/documents">
                                <i className="bb-icon-folder-alt"></i><span>My Documents</span>
                            </Link>
                        </li>      
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
                        <li>
                            <Link to = "/profile">
                                <i className="bb-icon-user"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to = "/timeline">
                                <i className="bb-icon-activity"></i>
                            </Link>
                        </li>
                        <li><div className='divider-horizontal'></div></li>
                        <li>
                            <Link to ="/groups">
                                <i className="bb-icon-users"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/messages">
                            <i className="bb-icon-comments-square"></i>
                            </Link>
                        </li>   
                        <li>
                            <Link to="/courses">
                                 <i className="bb-icon-graduation-cap"></i>
                            </Link>     
                        </li> 
                        <li><div className='divider-horizontal'></div></li>  
                        <li>
                            <Link to="/photos"> 
                                <i className="bb-icon-image"></i>
                            </Link>    
                        </li>
                        <li>
                            <Link to = "/documents">
                                <i className="bb-icon-folder-alt"></i>
                            </Link>
                        </li>     
                        </ul>
                    </div>
                )}         
            
        </div>
    );
}

export default Leftbar;