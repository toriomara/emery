import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isFetching: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        /*isFetching: (state, action) => {
            state.isFetching = false;
        }*/
    },
});

export const {login, logout, isFetching} = userSlice.actions

export const selectUser = state => state.user.user

export default userSlice.reducer
