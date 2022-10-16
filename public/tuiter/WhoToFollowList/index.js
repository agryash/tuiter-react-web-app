import WhoToFollowListItem from "./WhoToFollowListItem.js";
import Who from "./Who.js";

const WhoToFollowList = () => {
   return (`
           <ul class="list-group">
            <li class="list-group-item">
                <div class="d-flex align-items-center">
                    <h6><strong>Who to follow</strong></h6>
                </div>
            </li>
            ${
                    Who.map(who => {
                        return WhoToFollowListItem(who)
                    }).join('')
            }
           </ul>
        `); 
}

export default WhoToFollowList