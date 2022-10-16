import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="d-flex align-items-center justify-content-between position-relative">
                    <input type="text" placeholder="Search Twitter" class="p-2 px-5 position-relative wd-search-bar rounded-pill border w-75"/>
                    <i class="m-2 position-absolute fa fa-search" aria-hidden="true" id="search-icon" style="color: rgb(110, 118, 125);"></i>
                    <a href="#"><i class="fa fa-cog" aria-hidden="true" id="settings-icon"></i></a>
                </div>
               
           </div>
           <ul class="mt-2 mb-0 nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="d-none d-md-inline nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           
           <div class="position-relative">
                <img src="spacex.jpg" style="width:100%; height: 400px"/>
                <h3 class="m-2 position-absolute bottom-0" style="color:white; z-index:100">
                <Strong>SpaceX - Making rockets affordable</Strong></h3>
            </div>
           ${PostSummaryList()}
           
    `);
}
export default ExploreComponent;