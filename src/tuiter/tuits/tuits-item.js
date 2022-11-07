import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../home/home-reducer";

const TuitsItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "../../../public/assets/spacex.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={50} className="float-left rounded-circle" src={`${tuit.image}`} alt="logo"/>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}/>
                    <div className="fw-bold">
                        {tuit.userName} {' '}
                        <i className="bi bi-patch-check-fill wd-verified"/>
                        <span className="text-muted fw-normal">
                            {' '} {tuit.handle} &middot; {' '} {tuit.time}
                        </span>
                    </div>
                    <div className="fw-normal">
                        {tuit.tuit}
                    </div>
                    <br/>
                    <div>
                        <li className="wd-stats">
                            <div className="row">
                                <div className="col-3">
                                    <i className="fa fa-comment"/> {' '} {tuit.replies}
                                </div>
                                <div className="col-3">
                                    <i className="fa fa-retweet"/> {' '} {tuit.retuits}
                                </div>
                                <div className="col-3">
                                    <i className={`${tuit.liked === true ? `fa fa-heart wd-liked` : `fa fa-heart`}`}/>
                                    {' '} {tuit.likes}
                                </div>
                                <div className="col-3">
                                    <i className="fa fa-uploads"/>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitsItem;