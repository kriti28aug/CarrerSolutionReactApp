import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {useHistory} from "react-router-dom";

function HomePage(){
    let history = useHistory();

    function recruiterPage(){
        history.push("/recruiter");
    }
    function jobSeekerPage(){
        history.push("/jobSeeker");
    }

    return(
        <div>
            <p>
                 JOB PORTAL
            </p>
            <button type="button" onClick = {recruiterPage}>Recruiter Login</button>
            <button type="button" onClick = {jobSeekerPage}>JobSeeker Login</button>
        </div>
    )
}
export default HomePage;