const PostItem = (post) => {
    return (`<li class="list-group-item">
                <div class="row">
                    <div class="col-2">
                        <img src=${post.profileimage} class="rounded-circle wd-profile-image"/>
                    </div>
                    
                    <div class="col">
                        <span>
                            <h7>${post.userName}</h7>
                            
                            <span class="fa-stack"  style="font-size:8px">
                                <i class="fas fa-certificate fa-stack-2x"></i>
                                <i class="fa-solid fa-check fa-stack-1x fa-inverse" style="color:black"></i>
                            </span>
                            <small class="text-muted">${post.handle}</small>
                            &nbsp-&nbsp
                            <small class="text-muted">${post.time}</small>
                        </span>
                        <div class="wd-post-title">
                            <p class="h6">${post.posttitle}</p>
                        </div>
                        <div class="wd-content">
                            <img src=${post.image} class="rounded wd-image border" style="max-height:300px"/>
                            <div class="p-2 ${post.title != "" ? 'border' : 'd-none'}">
                                <h5 class="wd-text-title" style="font-size:18px">${post.title}</h5>
                                <small class="text-muted">${post.description}</small>
                            </div>
                        </div>
                        <div class="m-3 wd-bookmark-footer d-flex justify-content-between">
                            <a href="#" class="wd-bookmark-comment">
                            <i class="fa fa-comment-o" aria-hidden="true"><span class="m-2 wd-count">45</span></i>
                            </a>
                            <a href="#" class="wd-bookmark-retweet">
                            <i class="fa fa-retweet" aria-hidden="true"><span class="m-2 wd-count">45</span></i>
                            </a>
                            <a href="#" class="wd-bookmark-like">
                            <i class="fa fa-heart wd-liked" aria-hidden="true"><span class="m-2 wd-count wd-liked">45</span></i>
                            </a>
                            <a href="#" class="wd-bookmark-upload">
                            <i class="fa fa-upload" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </li>`);
}

export default PostItem