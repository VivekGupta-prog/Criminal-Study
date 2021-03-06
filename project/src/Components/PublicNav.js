import React from "react";
import {Link} from "react-router-dom";

function PublicNav() {
    return(
        <div>
            <nav className="public-nav">
                <ul className="nav-items">
                    <li className="nav-link"><Link to="/public/search">Search</Link></li>
                    <li className="nav-link"><Link to="/public/locality">Locality</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default PublicNav;