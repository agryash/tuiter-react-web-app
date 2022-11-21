import React from "react";
import { updateTuitThunk } from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    
    return(
        <div className="m-3 wd-bookmark-footer d-flex justify-content-between" > 
            <a href="#" className="wd-bookmark-comment">
                <i className="fa fa-comment-o" aria-hidden="true" style={{color:"black"}}><span className="m-2 wd-count">{tuit.replies}</span></i>
                </a>
                <a href="#" className="wd-bookmark-retweet">
                <i className="fa fa-retweet" aria-hidden="true" style={{color:"black"}}><span className="m-2 wd-count">{tuit.retuits}</span></i>
                </a>
                <a href="#" className="wd-bookmark-like">
                <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))} className = {tuit.liked === true ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true" style={{"color": tuit.liked === true ? "red" : "black"}}><span className="m-2 wd-count" style={{"color":"black"}}>{tuit.likes}</span></i>
                </a>
                <a href="#" className="wd-bookmark-like">
                <i onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))} className = "fas fa-thumbs-down" aria-hidden="true" style={{"color": tuit.liked === "black"}}><span className="m-2 wd-count" style={{"color":"black"}}>{tuit.dislikes ? tuit.dislikes : 1}</span></i>
                </a>
                <a href="#" className="wd-bookmark-upload">
                <i className="fa fa-upload" aria-hidden="true" style={{color:"black"}}></i>
            </a>
            
        </div>
    );
}

export default TuitStats