// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from './store/pageSlice';
import { selectUser } from './store/userSlice'; // Importa el selector de usuario

import Home from './pages/home/Home';
import ProfilePage from './pages/profilepage/ProfilePage';
import Timeline from './pages/timeline/Timeline';
import Courses from './pages/courses/Courses';
import Inbox from './pages/inbox/inbox';
import Groups from './pages/groups/groups';
import Document from './pages/documents/documents';
import Photo from './pages/photos/photo';
import UserProfileComponent from './components/ProfileComponent/UserProfileComponent';
import SubProfile from './components/SubProfile/SubProfile';

import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import LatestUpdates from './components/LatestUpdates/latestUpdates';
import './App.css';

function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.page.currentPage);
    const user = useSelector(selectUser); // Extrae los datos de usuario

    useEffect(() => {
        dispatch(setCurrentPage(location.pathname));
    }, [location, dispatch]);
    
    const profilePages = ['/profile', '/timeline', '/groups', '/courses', '/documents', '/photos'];

    return (
        <div className='main-container'>
            <div className='left-column'>
                <div className='navbar'><Navbar /></div>
                <Leftbar />
                {profilePages.includes(currentPage) && user && (
                    <div className="content-profile">
                        <UserProfileComponent
                            name={user.name || 'Guest'} 
                            followers={user.followers || '0'} 
                            following={user.following || '0'} 
                            joined={user.joined || 'N/A'} 
                            social={user.social || 'User'} 
                            image={user.image.img || null} 
                            portada={user.portada.banner || null} 
                        />
                        <div className="menu-subprofile">
                            <SubProfile />
                        </div>
                    </div>
                )}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/messages" element={<Inbox />} />
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/documents" element={<Document />} />
                    <Route path="/photos" element={<Photo />} />
                </Routes>
            </div>
            <div className="right-column">
                {currentPage !== '/messages' && <LatestUpdates />}
            </div>
        </div>
    );
}

export default App;
