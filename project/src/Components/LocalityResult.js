import React,{useEffect, useState} from "react";
import wards from "./Wards";

function LocalityResult(props){
    const[wardDetail,setWardDetail] = useState(null);
    function handleSubmit(event) {
        const locality = event.target.ward;
    }
    useEffect(() => {
        const wardVariable = localStorage.getItem("ward");
        if(wardVariable !== "undefined")
        {
            console.log(wardVariable+"Yoaflaiubgfkiagfkagfniaegflaineufhl")
            setWardDetail(JSON.parse(wardVariable))
        }
    }, [])
    return(
        <div>
            <div className="locality-container">
            <h1 className="heading">Check for Locality</h1>
            <p>The result for the search is given below</p>
            {(wardDetail) ? (
                <div>
                <p>Ward Number: {wardDetail.number}</p>
                <p>Ward Name: {wardDetail.name}</p>
                <p>Crime Rate: {wardDetail.crimeRate}</p>
                <p>Primary Weapon: {wardDetail.weapon}</p>
                </div>
            ) : (
                <p>Ward Details Not Found!</p>
            )}
            </div>
        </div>
    )
}

export default LocalityResult;