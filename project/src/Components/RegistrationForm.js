import React,{useState} from "react";

function RegistrationForm(props) {
    const[adminRegistrationDetails, setAdminDetails]=useState({
        fName: "",
        lName: "",
        username: "",
        department: "",
        departId: "",
        password: ""
    })
    const[publicRegistrationDetails, setPublicDetails] = useState({
        fName: "",
        lName: "",
        username: "",
        mail: "",
        password: ""
    })
    function handleSubmit() {
        if(localStorage.getItem("userValue") === "Public"){
            if(publicRegistrationDetails.fname === "" || publicRegistrationDetails.lname === "" || publicRegistrationDetails.username === "" || publicRegistrationDetails.mail === "" || publicRegistrationDetails.password === ""){
                alert("Please Fill All Columns");
                return;
            }
        } else {
            if(adminRegistrationDetails.fname === "" || adminRegistrationDetails.lname === "" || adminRegistrationDetails.username === "" || adminRegistrationDetails.departId === "" || adminRegistrationDetails.department === "" || adminRegistrationDetails.password === ""){
                alert("Please Fill All Columns");
                return;
            }
        }
        props.history.push({
            pathname: '/login',
            state: { fromDashboard: true }
        });
};
    function handleChange(event) {
        (localStorage.getItem("userValue") === "Public") ? (
        setPublicDetails({
            ...publicRegistrationDetails,
            [event.target.name]: event.target.value
        })
        ) : (
            setAdminDetails({
                ...adminRegistrationDetails,
                [event.target.name]: event.target.value
            })
        );
    }
    return(
        <div className="registration-container">
            <h1>Fill in the Registration Details</h1>
            <form >
                <input type="text" placeholder="First Name" onChange={handleChange} name="fName" required/>
                <input type="text" placeholder="Last Name" onChange={handleChange} name="lName" required/>
                <input  type="text" placeholder="Username" onChange={handleChange} name="username"/>
                {(localStorage.getItem("userValue") === "Admin" ) ? (
                    <div>
                <input  type="text" placeholder="Department" onChange={handleChange} name="department" required/>
                <input  type="text" placeholder="Department ID" onChange={handleChange} name="departId" required/>
                    </div>
                ) : (
                    <input  type="text" placeholder="Email Id" onChange={handleChange} name="mail" required/>
                )}
                <input  type="password" placeholder="Password" onChange={handleChange} name="password" required/>
                <input  type="password" placeholder="Confirm Password"/>
                <button onClick={handleSubmit}>Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm;