import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList
    from "./who-to-follow-list/index.js";
import ExploreComponent from "./explore/index.js";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import homeReducer from "./home/home-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import EditProfileComponent from "./edit-profile";
import React from "react";
import ProfileComponent from "./profile";
import profileReducer from "./reducers/profile-reducer";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, home: homeReducer, profile: profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index path="/" element={<ExploreComponent/>}/>
                        <Route path="/home" element={<HomeComponent/>}/>
                        <Route path="/explore" element={<ExploreComponent/>}/>
                        <Route path="/profile" element={<ProfileComponent/>}/>
                        <Route path="/edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>
                <WhoToFollowList/>
            </div>
        </Provider>
    );
}

export default Tuiter