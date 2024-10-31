// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from './store/pageSlice';

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

import img from './assets/images/person/1.png';
import banner from './assets/images/post/background.jpg';

function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.page.currentPage);

    useEffect(() => {
        // Actualiza la página actual en el store de Redux cada vez que cambia la ubicación
        dispatch(setCurrentPage(location.pathname));
    }, [location, dispatch]);
    
    const profilePages = ['/profile', '/timeline', '/groups', '/courses', '/documents', '/photos'];

    return (
        <div className='main-container'>
            <div className='left-column'>
                <div className='navbar'><Navbar/></div>
                <Leftbar/>
                { profilePages.includes(currentPage) &&
                <div className="content-profile">
                    <UserProfileComponent
                        name="John"
                        followers="15"
                        following="3"
                        joined="last week"
                        social="Admin"
                        image={img}
                        portada={banner}
                    />
                    <div className="menu-subprofile">
                        <SubProfile />
                    </div>
                </div>
                }
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/messages" element={<Inbox />} />
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/documents" element={<Document />} />
                    <Route path="/photos" element={<Photo />} />
                    {/* Añade más rutas según sea necesario */}
                </Routes>
            </div>
            <div className="right-column">
                {/* Condicionalmente renderiza LatestUpdates solo si no estamos en /messages */}
                {currentPage !== '/messages' && <LatestUpdates />}
            </div>
        </div>
    );
}

export default App;
