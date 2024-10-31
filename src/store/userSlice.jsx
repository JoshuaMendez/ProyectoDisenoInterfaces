// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import img from '../assets/images/person/1.png';
import banner from '../assets/images/post/background.jpg';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'John',
    followers: '15',
    following: '3',
    joined: 'last week',
    social: 'Admin',
    image: {img},
    portada: {banner}
  },
  reducers: {}
});

export const selectUser = (state) => state.user;
export default userSlice.reducer;
