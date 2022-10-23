import Assignment6 from "./a6";
import {Link} from "react-router-dom";

function Labs() {
    return(
       <div>
           <div>
               <Link to="/">Labs</Link> |
               <Link to="/hello">Hello</Link> |
               <Link to="/tuiter">Tuiter</Link>
           </div>
          <Assignment6/>
       </div>
    );
 }
 export default Labs;