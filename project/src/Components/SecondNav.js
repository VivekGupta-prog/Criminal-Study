import React from "react";
import {Link} from "react-router-dom";

function SecondNav(props) {
    return(
        <div>
            <nav className="second-nav">
            <ul className="nav-items">
                {
                    ( localStorage.getItem("userValue") === "Public" ) ? (
                        <div className="link-box">
                            <li className="nav-link"><Link to="/public/search">Search</Link></li>
                            <li className="nav-link"><Link to="/public/locality">Locality</Link></li>
                        </div>
                    ) : (
                        <div className="link-box">
                            <li className="nav-link"><Link to="/admin/newEntry">New Entry</Link></li>
                            <li className="nav-link"><Link to="/admin/search">Search</Link></li>
                            <li className="nav-link"><Link to="/admin/predict">Predict</Link></li>
                        </div>
                    )
                }
            </ul>
            </nav>
        </div>
    );
}

export default SecondNav;