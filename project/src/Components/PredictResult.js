import React from "react";

function PredictResult(){
    return(
        <div className="searchBox-container">
            <h1 className="heading">Prediction Result</h1>
            {(Math.random()*10 <= 6) ? (
                <h2>The Criminal should be Arrested!</h2>
            ) : (
                <h2>The Criminal should not be Arrested!</h2>
            )}
        </div>
    )
}

export default PredictResult;