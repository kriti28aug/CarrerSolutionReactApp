import React, {useState} from "react";

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./components/HomePage";
import JobSeekerLoginPage from "./components/jobSeeker/JobSeekerLoginPage";
import JobSeekerSignUpPage from "./components/jobSeeker/JobSeekerSignUpPage";
import RecruiterLoginPage from "./components/recruiter/RecruiterLoginPage";
import RecruiterSignUpPage from "./components/recruiter/RecruiterSignUpPage";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/recruiter" component={RecruiterLoginPage} />
          <Route path="/recruitersignup" component={RecruiterSignUpPage} />

          <Route path="/jobSeeker" component={JobSeekerLoginPage} />
          <Route path="/jobSeekerSignUp" component={JobSeekerSignUpPage} />

          <Redirect path="/" />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
