// ProfilePage.jsx
import React from 'react';
import './ProfilePage.css';
import profilePic from '../../assets/images/person/1.png'; 
import Navbar from '../../components/Navbar/Navbar';
import UserProfileComponent from '../../components/ProfileComponent/UserProfileComponent'; // Asegúrate de que la ruta sea correcta

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <Navbar />
            <UserProfileComponent
                name='John' 
                followers='15' 
                following='3' 
                joined='last week' 
                social='Admin' 
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQL6zsM57BsbMzp3Elvc9PmcB55sN2PWAyQ&s' 
                portada='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HH09I9jDiOkO4qqD-KDuLkp4czrTS3xjxw&s'
            />
        </div>
    );
};

export default ProfilePage;