import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

function JobSeekerLoginPage() {
    let history = useHistory();

    function jobSeekerSignUpPage() {
        history.push("/jobSeekerSignUp");
    }

    return (

        <div>
            <p>
                JobSeeker Signup Page
                </p>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required /><br></br><br></br>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required /><br></br><br></br>

            <button type="submit">Login</button>

            <button type="button" onClick={jobSeekerSignUpPage}>SignUp</button>
        </div>

    );
}

export default JobSeekerLoginPage;



