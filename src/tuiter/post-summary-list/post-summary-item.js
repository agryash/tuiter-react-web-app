import React from "react";
const PostSummaryItem = (
 {
   post
 }
) => {
 return(
        <li class="list-group-item">
            <div class="row wd-suggested-post wd-post-type3">
                <h6><small className = "text-muted">{post.topic}</small></h6>
                <div class="col-9 wd-text-container">
                    <span>
                        <h6 className="d-inline">{post.userName}</h6>
                        <span className="m-1 fa-stack"  style={{fontSize:"8px"}}>
                            <i className="fas fa-certificate fa-stack-2x"></i>
                            <i className="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        .
                        <small className="m-1 text-muted">{post.time}</small>
                    </span>
                    <p className="h6">{post.title}</p>
                </div>

                <div className="col-3">
                    <img src={`../../assets/${post.image}`} className="rounded wd-image"/>
                </div>
            </div>
        </li>
 );
};
export default PostSummaryItem;

