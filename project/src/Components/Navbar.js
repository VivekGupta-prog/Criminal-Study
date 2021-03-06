import React from "react";
import {Link, Redirect} from "react-router-dom";

function Navbar() {
    const customStyle={
        color: "white"
    }
    return(
        <div>
         <nav className="main-nav">
              <h1 className="brand-name">CATTA</h1>
              <ul className="nav-items">
                  <li className="nav-link" style={{customStyle}}><Link to={(localStorage.getItem("userValue") === "Public") ? (
                      "/public"
                  ) : (
                      "/admin"
                  )}>Home</Link></li>
                  <li className="nav-link" style={{customStyle}}><Link to="/about">About Us</Link></li>
                  <li className="nav-link" style={{customStyle}}><Link to="/login">Logout</Link></li>
              </ul>
          </nav>
        </div>
    )
}

export default Navbar;