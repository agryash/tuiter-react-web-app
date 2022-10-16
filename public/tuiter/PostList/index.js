import Posts from "./Posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
   return (`
           <ul class="list-group">
                ${Posts.map(post => {
                    return PostItem(post)
                }).join('')
            }
           </ul>
        `); 
}

export default PostList