import React, { useState } from "react";
import LocalityResult from "./LocalityResult";
import wards from "./Wards";

function Locality(props){
    const[wardNumber, setWard] = useState(null);
    function handleSubmit(event) {
        if(wardNumber === ""){
            alert("Enter Ward!");
            return;
        }
        event.preventDefault();
        let wardData = wards.find((item) => item.name === wardNumber || item.number.toString() === wardNumber);
        console.log(wardData);
        localStorage.setItem('ward', JSON.stringify(wardData));
        props.history.push({
            pathname: '/public/result',
                    state: {fromDashboard: true}
        });
    }

    function handleChange(event){
        console.log(event.target.value);
        setWard(event.target.value)
    }
    return(
        <div>
            <div className="locality-container">
            <h1 className="heading">Check for Locality</h1>
            <p>Enter the ward to check about the locality</p>
                <form className="input-form" >
                    <input type="text" onChange={handleChange} placeholder="Ward" name="ward" required/>
                    <button type="submit" onClick={handleSubmit}>Check</button>
                </form>
            </div>
        </div>
    )
}

export default Locality;