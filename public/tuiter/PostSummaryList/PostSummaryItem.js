const PostSummaryItem = (post) => {
    return (`<li class="list-group-item">
                <div class="row wd-suggested-post wd-post-type3">
                    <h7><small class="text-muted">${post.topic}</small></h7>
                    <div class="col-9 wd-text-container">
                        <span>
                            <h7>${post.userName}</h7>
                            <span class="fa-stack"  style="font-size:8px">
                                <i class="fas fa-certificate fa-stack-2x"></i>
                                <i class="fa-solid fa-check fa-stack-1x fa-inverse" style="color:black"></i>
                            </span>
                            &nbsp-&nbsp
                            <small class="text-muted">${post.time}</small>
                        </span>
                        <p class="h6">${post.title}</p>
                    </div>

                    <div class="col-3">
                        <img src=${post.image} class="rounded wd-image"/>
                    </div>
                </div>
            </li>`);
}

export default PostSummaryItem