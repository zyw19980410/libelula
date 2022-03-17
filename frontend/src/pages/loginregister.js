import React from "react";
import {Col, Row, Form, Input, Icon, Button} from "antd";
import "../assets/css/loginregister.css";

class LoginRegister extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span={8} offset={2}>
                    <h1>Login</h1>
                    <Form className={"form-container"} layout={"vertical"}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder={"Username"}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder={"Password"}
                                    type={"password"}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type={"primary"} htmlType={"submit"} style={{width: "100%"}}>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={8} offset={4}>
                    <h1>Register</h1>
                    <Form className={"form-container"} layout={"vertical"}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder={"Username"}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder={"Password"}
                                    type={"password"}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your password again!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder={"Confirm Password"}
                                    type={"password"}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type={"primary"} htmlType={"submit"} style={{width: "100%"}}>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const WrappedLoginRegister = Form.create({})(LoginRegister);

export default WrappedLoginRegister;