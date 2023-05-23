import React from "react";
import { Link } from "react-router-dom";

function About(){
    return <div>
        About Us
        <Link to="/home">
            <br />
            <button>Back to Home</button>
        </Link>
    </div>
}
export default About;