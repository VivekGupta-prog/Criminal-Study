import React from "react";

function About() {
    console.log("Inside About");
    return(
        <div>
        <div className="about-container">
        <div className="team">
        <h1 className="heading">Team</h1>
        <h2 className="subheading">Members:-</h2>
        <h3>Akshat Upadhyay</h3>
        <h3>Pyush Kumar Gupta</h3>
        <h3>Vivek Gupta</h3>
        </div>
        </div>
        <div className="project">
        <h1 className="main-heading">About</h1>
        </div>
        </div>
    );
}

export default About;