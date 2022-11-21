import { createSlice } from "@reduxjs/toolkit"
import profileInfo from "../data/profile.json"

const profileSlice = createSlice({
    name : 'profile',
    initialState : profileInfo,
    reducers: {
        updateProfile(state, action) {
            const firstName = action.payload.name.split(" ")[0];
            const lastName = action.payload.name.split(" ")[1];

            state.firstName = firstName;
            state.lastName = lastName;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.website = action.payload.website;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
})

export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer
  