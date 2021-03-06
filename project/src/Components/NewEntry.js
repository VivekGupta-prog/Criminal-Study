import React,{useState} from "react";

function NewEntry(props) {
    const[crimeReport, setReport]=useState({
        id:"",
        caseNumber: "",
        date: "",
        block: "",
        iucr: "",
        primaryType: "",
        description: "",
        locationDescription: "",
        arrest: "",
        domestic: "",
        beat: "",
        district: "",
        ward: "",
        communityArea: "",
        fbiCode: "",
        xCoordinate: "",
        yCoordinate: "",
        year: "",
        updatedOn: "",
        latitude: "",
        longitude: "",
        location: ""
    })
    function handleSubmit() {
        alert("Data Saved!!")
        props.history.push({
            pathname: "/admin",
            state: {fromDashboard: true}
        })
    }
    function handleChange(event) {
        setReport({
            ...crimeReport,
            [event.target.name]: event.target.value
        })
}
    return(
        <div>
        <div className="newEntry-container">
            <h1>Enter The Crime Details</h1>
            <form className="entry-form" action="/admin/newentry" method="post">
            <table>
                <tr>
                <td className="part">
                <label className="entry-label">ID</label>
                <input type="password" placeholder="ID" onChange={handleChange} name="id"/>
                </td>
                <td className="part">
                <label className="entry-label">Case Number</label>
                <input type="text" placeholder="Case Number" onChange={handleChange} name="caseNumber"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Date</label>
                <input type="date" placeholder="Date" onChange={handleChange} name="date"/>
                </td>
                <td className="part">
                <label className="entry-label">Block</label>
                <input type="text" placeholder="Block" onChange={handleChange} name="block"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">IUCR</label>
                <input type="text" placeholder="IUCR" onChange={handleChange} name="iucr"/>
                </td>
                <td className="part">
                <label className="entry-label">Primary Type</label>
                <input type="text" placeholder="Primary Type" onChange={handleChange} name="primaryType"/>
                </td>
                </tr>
                <tr>
                    <td className="part">
                    <label className="entry-label">Description</label>
                    <input type="text" placeholder="Description" onChange={handleChange} name="description"/>
                    </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Location Description</label>
                <input type="text" placeholder="Location Description" onChange={handleChange} name="locationDescription"/>
                </td>
                <td className="part">
                <label className="entry-label">Arrest</label>
                <input type="text" placeholder="Arrest" onChange={handleChange} name="arrest"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Domestic</label>
                <input type="text" placeholder="Domestic" onChange={handleChange} name="domestic"/>
                </td>
                <td className="part">
                <label className="entry-label">Beat</label>
                <input type="text" placeholder="Beat" onChange={handleChange} name="beat"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">District</label>
                <input type="text" placeholder="District" onChange={handleChange} name="district"/>
                </td>
                <td className="part">
                <label className="entry-label">Ward</label>
                <input type="text" placeholder="Ward" onChange={handleChange} name="ward"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Community Area</label>
                <input type="text" placeholder="Community Area" onChange={handleChange} name="communityArea"/>
                </td>
                <td className="part">
                <label className="entry-label">FBI Code</label>
                <input type="password" placeholder="FBI Code" onChange={handleChange} name="fbiCode"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">X Coordinate</label>
                <input type="text" placeholder="X Coordinate" onChange={handleChange} name="xCoordinate"/>
                </td>
                <td className="part">
                <label className="entry-label">Y Coordinate</label>
                <input type="text" placeholder="Y Coordinate" onChange={handleChange} name="yCoordinate"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Year</label>
                <input type="text" placeholder="Year" onChange={handleChange} name="year"/>
                </td>
                <td className="part">
                <label className="entry-label">Updated On</label>
                <input type="text" placeholder="Updated On" onChange={handleChange} name="updatedOn"/>
                </td>
                </tr>
                <tr>
                <td className="part">
                <label className="entry-label">Latitude</label>
                <input type="text" placeholder="Latitude" onChange={handleChange} name="latitude"/>
                </td>
                <td className="part">
                <label className="entry-label">Longitude</label>
                <input type="text" placeholder="Longitude" onChange={handleChange} name="longitude"/>
                </td>
                </tr>
                <tr>
                    <td className="part">
                    <label className="entry-label">Location</label>
                    <input type="text" placeholder="Location" onChange={handleChange} name="location"/>
                    </td>
                </tr>
            </table>
                <button className="entry-button" onClick={handleSubmit} type="submit">Save</button>
            </form>
        </div>
        </div>
    );
}

export default NewEntry;