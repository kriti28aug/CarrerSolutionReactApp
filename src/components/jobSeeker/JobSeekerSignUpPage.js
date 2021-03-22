import React, { Component, useState } from 'react';
import { Button, Form, Input, Space, Card } from "antd";
import "../jobSeeker/jobSeeker.css";


function JobSeekerSignUpPage() {

    function onSubmit(values) {
        console.log(values);
    }
    return (
        <Card
            title="Create your account"
            className="align-title"
            bordered={true}>
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 10,
                }}
                layout="horizontal"
                onFinish={onSubmit}
            >
                <Form.Item name="firstName" label="First Name">
                    <Input />
                </Form.Item>
                <Form.Item name="lastName" label="Last Name">
                    <Input />
                </Form.Item>
                <Form.Item label="E-Mail Id">
                    <Input />
                </Form.Item>
                <Form.Item label="Highest Qualification">
                    <Input />
                </Form.Item>
                <Form.Item label="Marks">
                    <Input />
                </Form.Item>
                <Form.Item label="Specialization">
                    <Input />
                </Form.Item>
                <Form.Item label="Experience">
                    <Input />
                </Form.Item>
                <Form.Item label="Previous Company Name">
                    <Input />
                </Form.Item>
                <Form.Item style={{ marginLeft: '32rem' }}>
                    <Button type="primary" size="large" htmlType="submit" style={{ width: '15rem' }}>
                        Submit
    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}
export default JobSeekerSignUpPage;