import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import RecruiterSignUpPage from './RecruiterSignUpPage';

function RecruiterLoginPage() {
    let history = useHistory();

    function recruiterSignUpPage() {
        history.push("/recruitersignup");
    }

    return (

        <div>
            <p>
                Recruiter Signup Page
                </p>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required /><br></br><br></br>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required /><br></br><br></br>

            <button type="submit">Login</button>

            <button type="button" onClick={recruiterSignUpPage}>SignUp</button>
        </div>

    );
}

export default RecruiterLoginPage;



