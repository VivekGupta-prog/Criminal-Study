import React from "react";

function AdminNav() {
    return(
        <div>
            <nav className="admin-nav">
                <ul className="nav-items">
                    <li className="nav-link"><a href="#">New Entry</a></li>
                    <li className="nav-link"><a href="#">Search</a></li>
                    <li className="nav-link"><a href="#">Predict</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default AdminNav;