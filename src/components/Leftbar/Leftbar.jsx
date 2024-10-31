// Leftbar.jsx
import React from 'react';
import './Leftbar.css';
import '../../assets/icons/css/bb-icons.css'; // Asegúrate de que esta ruta sea correcta
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const Leftbar = () => {
    const currentPage = useSelector((state) => state.page.currentPage);
    const [isExpanded, setIsExpanded] = React.useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <nav>
            {isExpanded && (
                <div className="barExpandida">
                    <button id="header-desplegable">
                        <i className="bb-icon-sidebar" id="desplegable" onClick={handleToggle}></i>
                    </button>
                    <div className='rellenoBarExpandida'>
                        <ul className='icon-list-left'>
                            <h4>PERSONAL</h4>
                            <li className={currentPage === '/profile' ? "filled" : "clear"}>
                                <Link to="/profile">
                                    <i className={currentPage === '/profile' ? "bb-icon-f bb-icon-user icon-colored" : "bb-icon-l bb-icon-user"}></i>
                                    <span>My Profile</span>
                                </Link>
                            </li>
                            <li className={currentPage === '/timeline' ? "filled" : "clear"}>
                                <Link to="/timeline">
                                    <i className="bb-icon-activity"></i>
                                    <span>My Timeline</span>
                                </Link>
                            </li>
                            <h4>COMMUNITY</h4>
                            <li className={currentPage === '/groups' ? "filled" : "clear"}>
                                <Link to="/groups">
                                    <i className="bb-icon-users"></i>
                                    <span>My Groups</span>
                                </Link>
                            </li>
                            <li className={currentPage === '/messages' ? "filled" : "clear"}>
                                <Link to="/messages">
                                    <i className="bb-icon-comments-square"></i>
                                    <span>My Discussions</span>
                                </Link>
                            </li>     
                            <li className={currentPage === '/courses' ? "filled" : "clear"}>
                                <Link to="/courses">
                                    <i className="bb-icon-graduation-cap"></i>
                                    <span>My Courses</span>
                                </Link>
                            </li>
                            <h4>MEDIA</h4> 
                            <li className={currentPage === '/photos' ? "filled" : "clear"}>
                                <Link to="/photos">
                                    <i className="bb-icon-image"></i>
                                    <span>My Photos</span>
                                </Link>
                            </li>
                            <li className={currentPage === '/documents' ? "filled" : "clear"}>
                                <Link to="/documents">
                                    <i className="bb-icon-folder-alt"></i>
                                    <span>My Documents</span>
                                </Link>
                            </li>      
                        </ul>
                    </div>
                </div>
            )}
            {!isExpanded && (
                <div className='leftbar'>
                    <button id="header-desplegable">
                        <i className="bb-icon-sidebar" id="desplegable" onClick={handleToggle}></i>
                    </button>
                    <ul className='icon-list-left'>
                        <li className={currentPage === '/profile' ? "filled" : "clear"}>
                            <Link to="/profile">
                                <i className="bb-icon-user"></i>
                            </Link>
                        </li>
                        <li className={currentPage === '/timeline' ? "filled" : "clear"}>
                            <Link to="/timeline">
                                <i className="bb-icon-activity"></i>
                            </Link>
                        </li>
                        <li><div className='divider-horizontal'></div></li>
                        <li className={currentPage === '/groups' ? "filled" : "clear"}>
                            <Link to="/groups">
                                <i className="bb-icon-users"></i>
                            </Link>
                        </li>
                        <li className={currentPage === '/messages' ? "filled" : "clear"}>
                            <Link to="/messages">
                                <i className="bb-icon-comments-square"></i>
                            </Link>
                        </li>   
                        <li className={currentPage === '/courses' ? "filled" : "clear"}>
                            <Link to="/courses">
                                <i className="bb-icon-graduation-cap"></i>
                            </Link>     
                        </li> 
                        <li><div className='divider-horizontal'></div></li>  
                        <li className={currentPage === '/photos' ? "filled" : "clear"}>
                            <Link to="/photos"> 
                                <i className="bb-icon-image"></i>
                            </Link>    
                        </li>
                        <li className={currentPage === '/documents' ? "filled" : "clear"}>
                            <Link to="/documents">
                                <i className="bb-icon-folder-alt"></i>
                            </Link>
                        </li>     
                    </ul>
                </div>
            )}         
        </nav>
    );
}

export default Leftbar;
