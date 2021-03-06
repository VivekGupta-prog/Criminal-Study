import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Login(props) {
    const[loginDetails, setDetails]=useState({
        username: "",
        password: ""
    })
    async function handleSubmit(event) {
        if(loginDetails.username === "" || loginDetails.password === ""){
            alert("Invalid Username or Password!");
            return;
        }
        if(event.target.name === "username" || event.target.name === "password"){
            if(event.target.value === null){
                alert("Please Enter Correct Details");
            }
        }
        else{
        (localStorage.getItem("userValue")==="Public") ? (
            props.history.push({
                pathname: "/public",
                state: {fromDashboard: true}
            })
        ) : (
            props.history.push({
                pathname: "/admin",
                state: {fromDashboard: true}
            })
        )}

    }
    function handleChange(event) {
            console.log(event.target.name+"Yo");
            setDetails({
                ...loginDetails,
                [event.target.name]: event.target.value
            })
    }
    return(
        <div className="container">
        <h1>Login Here!</h1>
            <form action="/login" method="post">
                <input type="text" onChange={handleChange} placeholder="Username" name="username" required/>
                <input type="password" onChange={handleChange} placeholder="Password" name="password" required/>
                <button type="submit" onClick={handleSubmit} >Login</button>
            </form>
            <p>New User?<Link to="/registration" className="registerpath">Click Here!</Link></p>
        </div>
    );
}

export default Login;