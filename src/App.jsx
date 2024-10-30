import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ProfilePage from './pages/profilepage/ProfilePage'; // Ejemplo de otra página
import Timeline from './pages/timeline/Timeline'; // Ejemplo de otra página
import Courses from './pages/courses/Courses'; // Ejemplo de otra página
import Inbox from './pages/inbox/inbox';
import Groups from './pages/groups/groups';
import Document from './pages/documents/documents';
import Photo from './pages/photos/photo';
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import LatestUpdates from './components/LatestUpdates/latestUpdates';
import './App.css';

function App() {
    return (
        <div className='container'>
            <Navbar />
            <Leftbar />
            <div className='sub-container'>
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/timeline" element={<Timeline />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/messages" element={<Inbox/>}/>
                        <Route path="/groups" element={<Groups/>}/>
                        <Route path="/courses" element={<Courses/>}/>
                        <Route path="/documents" element={<Document/>}/>
                        <Route path="/photos" element={<Photo/>}/>
                        {/* Añade más rutas según sea necesario */}
                    </Routes>
                </div>
                <div className="right-column">
                    <LatestUpdates />
                </div>
            </div>
        </div>
    );
}

export default App;