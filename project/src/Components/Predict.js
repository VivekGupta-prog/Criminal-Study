import React from "react";

function Predict(props){
    function handleSubmit() {
        props.history.push({
            pathname: "/admin/predictresult",
            state: {fromDashboard: true}
        })
    }
    return(
        <div>
        <div className="newEntry-container">
            <h1>Enter details for Prediction</h1>
            <form className="entry-form" action="/admin/predict" method="post">
            <table>
                <tr>
                    <td className="part">
                        <label className="entry-label">ID</label>
                        <input type="text" placeholder="UnNamed" name="#" />
                    </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">ID</label>
                <input type="password" placeholder="ID" name="id"/>
                </td>
                <td className="part">
                <label className="entry-label">Case Number</label>
                <input type="text" placeholder="Case Number" name="caseNumber"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Date</label>
                <input type="date" placeholder="Date" name="date"/>
                </td>
                <td className="part">
                <label className="entry-label">Block</label>
                <input type="text" placeholder="Block" name="block"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">IUCR</label>
                <input type="text" placeholder="IUCR" name="iucr"/>
                </td>
                <td className="part">
                <label className="entry-label">Primary Type</label>
                <input type="text" placeholder="Primary Type" name="primaryType"/>
                </td>
                </tr>
                <tr>
                    <td className="part">
                    <label className="entry-label">Description</label>
                    <input type="text" placeholder="Description" name="description"/>
                    </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Location Description</label>
                <input type="text" placeholder="Location Description" name="locationDescription"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Domestic</label>
                <input type="text" placeholder="Domestic" name="domestic"/>
                </td>
                <td className="part">
                <label className="entry-label">Beat</label>
                <input type="text" placeholder="Beat" name="beat"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">District</label>
                <input type="text" placeholder="District" name="district"/>
                </td>
                <td className="part">
                <label className="entry-label">Ward</label>
                <input type="text" placeholder="Ward" name="ward"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Community Area</label>
                <input type="text" placeholder="Community Area" name="communityArea"/>
                </td>
                <td className="part">
                <label className="entry-label">FBI Code</label>
                <input type="password" placeholder="FBI Code" name="fbiCode"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">X Coordinate</label>
                <input type="text" placeholder="X Coordinate" name="xCoordinate"/>
                </td>
                <td className="part">
                <label className="entry-label">Y Coordinate</label>
                <input type="text" placeholder="Y Coordinate" name="yCoordinate"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Year</label>
                <input type="text" placeholder="Year" name="year"/>
                </td>
                <td className="part">
                <label className="entry-label">Updated On</label>
                <input type="date" placeholder="Updated On" name="updatedOn"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Latitude</label>
                <input type="text" placeholder="Latitude" name="latitude"/>
                </td>
                <td className="part">
                <label className="entry-label">Longitude</label>
                <input type="text" placeholder="Longitude" name="longitude"/>
                </td>
                </tr>
                <tr>
                    <td className="part">
                    <label className="entry-label">Location</label>
                    <input type="text" placeholder="Location" name="location"/>
                    </td>
                </tr>
            </table>
                <button className="entry-button" onClick={handleSubmit} type="submit">Predict</button>
            </form>
        </div>
        </div>
    );
}

export default Predict;