import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Newcomponent from "./dupliacte2";


function App() {
  return (
    <HashRouter>
       {/* <div className="container mt-3">
          <div className="row">
            <div className="col-lg-4">
               
            </div>
            <div className="col-lg-8 text-end">
                <div className="btn-group">
                  <Link className="btn btn-success" to="/user"> Manage User </Link>
                </div>
            </div>
          </div>
       </div> */}
       {/* <MyComponent/> */}
     <Newcomponent/>

        {/* <Routes>
          <Route exact path="/user" element={<Myuser/>} />
       </Routes> */}
    </HashRouter>
  );
}

export default App;
