import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ProfilePage from './pages/profilepage/ProfilePage'; // Ejemplo de otra página
import Timeline from './pages/timeline/Timeline'; // Ejemplo de otra página
import Courses from './pages/courses/Courses'; // Ejemplo de otra página
import Inbox from './pages/inbox/inbox';
import Groups from './pages/groups/groups';

function App() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/messages" element={<Inbox/>}/>
        <Route path="/groups" element={<Groups/>}/>
        {/* Añade más rutas según sea necesario */}
        </Routes>
    );
}

export default App;