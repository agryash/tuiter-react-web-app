const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row pe-2">
                <div class="col-2">
                    <img src = "${who.avatarIcon}" class="rounded-circle" style="width:50px; height:50px"/>
                </div>
                <div class="col-7">
                    <span>
                        <strong>${who.userName}</strong>
                        <span class="fa-stack"  style="font-size:8px">
                            <i class="fas fa-certificate fa-stack-2x"></i>
                            <i class="fa-solid fa-check fa-stack-1x fa-inverse"  style="color:black"></i>
                        </span>
                    </span>

                    <p>@${who.handle}</p>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center">
                    <div>
                        <button class="btn btn-primary rounded-pill">Follow</button>
                    </div>

                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem