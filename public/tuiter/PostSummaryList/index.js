import Posts from "./Posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
   return (`
           <ul class="list-group">
                ${Posts.map(post => {
                    return PostSummaryItem(post)
                }).join('')
            }
           </ul>
        `); 
}

export default PostSummaryList