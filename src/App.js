import logo from "./logo.svg";
import "./App.css";
import {Home} from "./Home";
import {Summoner} from "./Summoner";
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex jusitify-content-center m-3">
        React JS Frontend
      </h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-itme- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-itme- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/summoner">
                Summoner
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/summoner' element={<Summoner/>}/>
        </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
