import { createSlice } from "@reduxjs/toolkit";
import home from './home.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const homeSlice = createSlice({
    name: 'home',
    initialState: home,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

        createTuit(state, action) {
            state.unshift({
                _id: (new Date()).getTime(),
                ...action.payload,
                ...templateTuit,
            })
        }
    }
});

export const {createTuit, deleteTuit} = homeSlice.actions;
export default homeSlice.reducer;