import {createTuit} from "./home-reducer";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import "./index.css"

const WhatsHappening = () => {
    const [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit));
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="../assets/Nasa.webp" style={{ width: 70, height: 60 }} alt="logo"/>
            </div>
            <div className="col-10">
          <textarea value={whatsHappening} placeholder="What's happening?"
                    className="form-control border-0"
                    onChange={(event) => setWhatsHappening(event.target.value)}>
          </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <div className="inline">
                            <i className="fa-solid fa-image"></i>
                            <i className="fa-solid fa-chart-simple"></i>
                            <i className="fa-solid fa-face-smile"></i>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;