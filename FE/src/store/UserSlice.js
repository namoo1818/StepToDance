import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        accessToken: null,
        nickname: null,
        profileImgUrl: null,
    },
    reducers: {
        setUserData: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.nickname = action.payload.nickname;
            state.profileImgUrl = action.payload.profileImgUrl;
        },
        logout: (state) => {
            state.accessToken = null;
            state.nickname = null;
            state.profileImgUrl = null;
        },
    },
});

export const { setUserData, logout } = UserSlice.actions;

export default UserSlice.reducer;
