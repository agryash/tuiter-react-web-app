import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
    const data = useSelector(state => state.profileInfo)
    return(
        <div className="border">
            <div className="row">
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className="col-auto">
                    <h3>Jose Annuniziate</h3>
                    <small>{data.tweets} tweets</small>
                </div>
            </div>
            <div>
                <img src={data.bannerPicture}/>
            </div>
            <div className="row">
                <div className="col-3">
                    <img src={data.profilePicture} className="rounded-circle" style={{marginTop: "-80px", padding:"0px 10px"}}/>
                </div>
                <div className="col-9 p-2">
                    <Link to="/tuiter/edit-profile">
                        <button className="btn btn-outline-secondary rounded-pill" style={{marginRight: "30px", float:"right"}}>
                            Edit Profile
                        </button>
                    </Link>
                    
                </div>
            </div>
            <div className="container-fluid">
                <div>
                    <h3>{data.firstName + " " + data.lastName}</h3>
                    <p>{data.handle}</p>
                    <p>{data.bio}</p>
                </div>
                <div className="d-flex justify-content-between p-2" style={{color:"gray"}}>
                    <span><i class="fa fa-map-marker" aria-hidden="true" style={{marginRight:"10px"}}/>{data.location}</span>
                    <span><i class="fa fa-birthday-cake" aria-hidden="true" style={{marginRight:"10px"}}/>{data.dateOfBirth}</span>
                    <span><i class="fa fa-calendar" aria-hidden="true" style={{marginRight:"10px"}}/>{data.dateJoined}</span>
                </div>
                <div>
                    <span><span style={{fontWeight:"bold"}}>{data.followingCount}</span><span  style={{marginLeft:"5px"}}>Following</span></span>
                    <span style={{marginLeft:"15px"}}><span style={{fontWeight:"bold"}}>{data.followersCount}</span><span  style={{marginLeft:"5px"}}>Followers</span></span>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent