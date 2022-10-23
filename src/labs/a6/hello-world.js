import {Link} from "react-router-dom";

function HelloWorld() {
    return(
        <div>
            <div>
                <Link to="/">Labs</Link> |
                <Link to="/hello">Hello</Link> |
                <Link to="/tuiter">Tuiter</Link>
            </div>
            <h1>Hello World!</h1>
        </div>
    );
 };
 export default HelloWorld;