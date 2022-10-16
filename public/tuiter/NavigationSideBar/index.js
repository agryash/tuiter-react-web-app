const NavigationSidebar = (active) => {
    return(`
    
    <div class="list-group">
        <li class="list-group-item list-group-item-action">
            <a href="#">
                <span><i class="fab fa-twitter" style="color: white"></i></span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action  ${active === 'home' ? 'active' : ''}">
            <a href="../HomeScreen/index.html">
                <span>
                    <i class="fas fa-home" style="color: white"></i><span class="m-2 d-none d-xl-inline" style="color: white">Home</span>
                </span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}">
            <a href="../explore/index.html" >
                <span><i class="fa-solid fa-hashtag mr-5" style="color: white"></i><span class="m-2 d-none d-xl-inline" style="color: white">Explore</span></span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="#" >
                <span><i class="fas fa-bell mr-5" style="color: white"></i><span class="m-2 d-none d-xl-inline" style="color: white">Notifications</span></span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="#">
                <span><i class="fas fa-envelope" style="color: white"></i><span class="m-2 d-none d-xl-inline" style="color: white">Message</span></span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="#">
                <span><i class="fas fa-bookmark"style="color: white"></i><span class="m-2 d-none d-xl-inline" style="color: white">Bookmarks</span></span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="#">
                <span><i class="fas fa-list" style="color: white"></i><span class="m-2 d-none d-xl-inline" style="color: white">Lists</span></span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="#">
                <span><i class="fas fa-user" style="color: white"></i><span class="m-2 d-none d-xl-inline" style="color: white">Profile</span></span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="#">
            <span>
            <i class="fa-solid fa-circle-info" style="color: white"></i>
            <span class="m-2 d-none d-xl-inline" style="color: white">More</span>
            </span>
            </a>
        </li>
    </div>
    <button class="mt-2 btn btn-primary rounded-pill w-100">Tweet</button>
    `);
   };
   export default NavigationSidebar;



