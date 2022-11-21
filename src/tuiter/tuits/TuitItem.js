import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`../../assets/${tuit.image}`} className="rounded-circle wd-profile-image"/>
                </div>
                
                <div className="col">
                    <span>
                        <h7>{tuit.userName}</h7>
                        
                        <span className="m-1 fa-stack" style={{fontSize: "8px"}}>
                            <i className="fas fa-certificate fa-stack-2x"></i>
                            <i className="fa-solid fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        <small className="m-1 text-muted">{tuit.handle}</small>
                        .
                        <small className="m-1 text-muted">{tuit.time}</small>
                    </span>
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}>
                    </i>
                    <div className="wd-content">
                        <p>{tuit.tuit}</p>
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;

