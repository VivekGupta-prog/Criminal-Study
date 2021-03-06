import React from "react";

function Search(){
    async function handleClick() {
        alert("No Data Present!");
    }
    return(
        <div>
            <div className="searchBox-container">
                <h1 className="heading">Search</h1>
                <p>Search for cases according to the case number or case name, etc.</p>
                <form className="search-form">
                <input type="text" className="input-box" placeholder="Case Number" />
                <input type="text" className="input-box" placeholder="Case Name" />
                <button type="submit" onClick={handleClick}>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search;