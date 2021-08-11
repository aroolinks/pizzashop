import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <div>
      
 
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
      <Route>
      <ul className="navbar__ul">
          <li>
            <Link to='/'> Home </Link>
           
          </li>
          <li>
            <Link to='/about'> About </Link>
          </li> 
           <li>
            <Link to="/menu"> Menu </Link>
          </li>
          <li>
            <Link to="/clients"> Clients </Link>
          </li>
        

        </ul>
        </Route>  
      </div>
    </nav>


    </div>
  )
}

export default Navbar


