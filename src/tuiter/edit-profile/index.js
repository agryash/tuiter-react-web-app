import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "../reducers/profile-reducer";
import { useNavigate } from "react-router-dom";

const EditProfileComponent = () => {
    const data = useSelector(state => state.profileInfo)
    const [name, setName] =useState(data.firstName + " " + data.lastName)
    const [bio, setBio] =useState(data.bio)
    const [location, setLocation] =useState(data.location)
    const [website, setWebsite] =useState(data.website)
    const [dateOfBirth, setDateOfBirth] =useState(data.dateOfBirth)
    
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        const updatedData = {name: name, bio: bio, location: location, website: website, dateOfBirth: dateOfBirth};
        dispatch(updateProfile(updatedData))
        navigate("/tuiter/profile");
    }

    const closeHandler = () => {
        navigate("/tuiter/profile");
    }

    return(
        <div className="border">
            <div className="row" style={{padding: "10px 0px"}}>
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <i className="bi bi-x-lg float-end" onClick={() => closeHandler()}></i>
                </div>
                <div className="col-9">
                    <h3>Edit Profile</h3>
                </div>
                <div className="col-2">
                    <button className="btn btn-dark rounded-pill" onClick={saveClickHandler}>Save</button>
                </div>
            </div>
            <div>
                <img src={data.bannerPicture}/>
            </div>
            <div className="row">
                <div className="col-3">
                    <img src={data.profilePicture} className="rounded-circle" style={{marginTop: "-80px", padding:"0px 10px"}}/>
                </div>
            </div>
            <div className="container-fluid wd-profile-form" style={{padding:"24px"}}>
                <label for="wd-username">Name</label>
                <input className="form-control" type="text" name="wd-username" id="wd-username" value={name} onChange={(event) => setName(event.target.value)}/>

                <label for="wd-bio">Bio</label>
                <textarea className="form-control" name="wd-bio" id="wd-bio" value={bio} onChange={(event) => setBio(event.target.value)}></textarea>

                <label for="wd-location">Location</label>
                <input className="form-control" type="text" name="wd-location" id="wd-location" value={location} onChange={(event) => setLocation(event.target.value)}/>

                <label for="wd-website">Location</label>
                <input className="form-control" type="text" name="wd-website" id="wd-website" value={website} onChange={(event) => setWebsite(event.target.value)}/>

                <label for="wd-dob">Birth Date</label>
                <input className="form-control" type="date" name="wd-dob" id="wd-dob" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)}/>
            </div>
        </div>
    );
}

export default EditProfileComponent