import React from 'react';
import {Button, Card, Space} from "antd";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import "../components/homePage.css";

  

function HomePage() {
    let history = useHistory();

    function recruiterPage() {
        history.push("/recruiter");
    }
    function jobSeekerPage() {
        history.push("/jobSeeker");
    }
  


    return (
        <div>      
            <Card
                title="JOB PORTAL"
                className="homepage-card-position"
                bordered={true}
            >
                <Space>
                    <Button type="primary" onClick={recruiterPage}>Recruiter</Button>
                    <Button type="primary" onClick={jobSeekerPage}>JobSeeker</Button>
                </Space>
            </Card>
        </div>
    );
}
export default HomePage;