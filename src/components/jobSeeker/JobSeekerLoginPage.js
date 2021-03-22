import React, { Component } from 'react';
import { Button, Form, Input, Space } from "antd";
import { useHistory } from "react-router-dom";
import "../jobSeeker/jobSeeker.css";
import "./../../components/homePage.css"



function JobSeekerLoginPage() {
    let history = useHistory();

    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 16
        }
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16
        }
    };

    function jobSeekerSignUpPage() {
        history.push("/jobSeekerSignUp");
    }

    return (

        <div>
            <div className="card-size  container-seeker-box align-title">
                <div className="align-title">
                    <strong>Sign in to your account</strong>
                </div>
                <br />

                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true
                    }}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!"
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Submit
                </Button>
                            <Button type="default" onClick={jobSeekerSignUpPage}>
                                Create Account
                </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default JobSeekerLoginPage;



