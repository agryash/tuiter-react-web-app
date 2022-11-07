import Assignment6 from "./a6";
import Assignment7 from "./a7";
import {Routes, Route} from "react-router";
import {Link} from "react-router-dom";

function Labs() {
    return (
        <div>
            <div>
                <Link to="/">Labs</Link> |
                <Link to="/">Assignment 6</Link> |
                <Link to="/a7">Assignment 7</Link> |
                <Link to="/tuiter">Tuiter</Link>
            </div>
            <Routes>
                <Route index
                       element={<Assignment6/>}/>
                <Route path="/a7"
                       element={<Assignment7/>}/>
            </Routes>
        </div>
    );
}

export default Labs;

