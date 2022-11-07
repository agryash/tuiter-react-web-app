import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const PostItem = ({post}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img alt="" src={post.profileimage} className="rounded-circle wd-profile-image"/>
                </div>
                
                <div className="col">
                    <span>
                        <h6>{post.userName}</h6>
                        
                        <span className="m-1 fa-stack" style={{fontSize: "8px"}}>
                            <i className="fas fa-certificate fa-stack-2x"></i>
                            <i className="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        <small className="m-1 text-muted">{post.handle}</small>
                        .
                        <small className="m-1 text-muted">{post.time}</small>
                    </span>
                    <div className="wd-post-title ">
                        <p className="h6">{post.posttitle}</p>
                    </div>
                    <div className="wd-content">
                        <img alt="" src={post.image} className="rounded wd-image border"/>
                        <div>
                            <h5 className="wd-text-title" style={{fontSize: "18px"}}>{post.title}</h5>
                            <small className="text-muted">{post.description}</small>
                        </div>
                    </div>
                    <div className="m-3 wd-bookmark-footer d-flex justify-content-between">
                        <a href="/#" className="wd-bookmark-comment">
                        <i className="fa fa-comment" aria-hidden="true"><span className="m-2 wd-count">45</span></i>
                        </a>
                        <a href="/#" className="wd-bookmark-retweet">
                        <i className="fa fa-retweet" aria-hidden="true"><span className="m-2 wd-count">45</span></i>
                        </a>
                        <a href="/#" className="wd-bookmark-like">
                        <i className="fa fa-heart wd-liked" aria-hidden="true"><span className="m-2 wd-count wd-liked">45</span></i>
                        </a>
                        <a href="/#" className="wd-bookmark-upload">
                        <i className="fa fa-upload" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;

