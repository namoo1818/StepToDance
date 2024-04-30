import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
  nickname: null,
  profileImgUrl: null,
  isLoggedIn: false // Add this line to track login status
};


export const userLoggedInSelector = (state) => {
  return state.user.isLoggedIn;
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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

export const {  setUserData, logout } = UserSlice.actions;
export default UserSlice.reducer;
