import './App.css';
import Labs from './labs';
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
   return (
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/*"
                    element={<Labs/>}/>
              <Route path="/hello"
                    element={<HelloWorld/>}/>
              <Route path="/tuiter/*"
                    element={<Tuiter/>}/>
            </Routes>
          </div>
        </BrowserRouter>

   );
}

export default App;