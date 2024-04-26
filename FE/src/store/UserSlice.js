// In userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
  nickname: null,
  profileImgUrl: null,
  isLoggedIn: false // Add this line to track login status
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.nickname = action.payload.nickname;
      state.profileImgUrl = action.payload.profileImgUrl;
      state.isLoggedIn = true; // Set logged in status when user data is set
    },
    logout: (state) => {
      state.accessToken = null;
      state.nickname = null;
      state.profileImgUrl = null;
      state.isLoggedIn = false; // Reset login status
    },
  },
});

export const { setLoginStatus, setUserData, logout } = userSlice.actions;
export default userSlice.reducer;
