import React from "react";
import {Col, Row, Form, Input, Icon, Button} from "antd";
import style from "../assets/css/login_register.css";
import Role from "../store/role";
import Auth from "../store/auth"
import {router} from "umi";
import request from 'umi-request';

class Login_register extends React.Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Row>
                <Col span={8} offset={2}>
                    <h1>Login</h1>
                    <Form className={style["form-container"]} layout={"vertical"}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" className={style["field-icon"]}/>}
                                    placeholder={"Username"}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your password!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" className={style["field-icon"]}/>}
                                    placeholder={"Password"}
                                    type={"password"}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type={"primary"} htmlType={"submit"} onClick={this.doUserLogin}
                                    className={style["login-form-button"]}>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={8} offset={4}>
                    <h1>Register</h1>
                    <Form className={style["form-container"]} layout={"vertical"}>
                        <Form.Item>
                            {getFieldDecorator('reg-username', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" className={style["field-icon"]}/>}
                                    placeholder={"Username"}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('reg-password', {
                                rules: [{required: true, message: 'Please input your password!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" className={style["field-icon"]}/>}
                                    placeholder={"Password"}
                                    type={"password"}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('reg-reenter-password', {
                                rules: [{required: true, message: 'Please input your password again!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" className={style["field-icon"]}/>}
                                    placeholder={"Confirm Password"}
                                    type={"password"}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type={"primary"} htmlType={"submit"} className={style["login-form-button"]}
                                    onClick={this.doUserRegister}>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }

    doUserLogin = (event) => {
        const {form} = this.props

        if (form.getFieldValue('username') === "admin") {
            request.post('http://127.0.0.1:10000/api/admin/login', {
                data: {
                    username: 'admin',
                    password: form.getFieldValue('password')
                }
            }).then(function (response) {
                console.log(response)
                Auth.Token = response['body']['access_token']
                console.log("admin is login")
                router.push("/admin/user_list")
                Role.CurrentRole = Role.ADMIN_ROLE
            }).catch(function (error) {
                alert(error.data['message'])
            })
        } else if (form.getFieldValue('username') === "super-admin") {
            request.post('http://127.0.0.1:10000/api/admin/login', {
                data: {
                    username: 'admin',
                    password: form.getFieldValue('password')
                }
            }).then(function (response) {
                Auth.Token = response['body']['access_token']
                console.log("admin is login")
                router.push("/admin/user_list")
                Role.CurrentRole = Role.SUPER_ADMIN_ROLE
            }).catch(function (error) {
                alert(error.data['message'])
            })
        } else {
            request.post('http://127.0.0.1:10000/api/customer/login', {
                data: {
                    mobile: form.getFieldValue('username'),
                    password: form.getFieldValue('password')
                }
            }).then(function (response) {
                Role.CurrentRole = Role.CUSTOMER_ROLE
                Auth.Token = response['body']['access_token']
                router.push("/customer")
            }).catch(function (error) {
                alert(error.data['message'])
            })
        }
    }

    doUserRegister = (event) => {
        const {form} = this.props

        request.post('http://127.0.0.1:10000/api/customer', {
            data: {
                mobile: form.getFieldValue('reg-username'),
                password: form.getFieldValue('reg-password'),
                password_confirmation: form.getFieldValue('reg-reenter-password'),
            }
        }).then(function (response) {
            router.push("/customer")
        }).catch(function (error) {
            alert(error.data['message'])
        })
    }
}

const WrappedLoginRegister = Form.create({})(Login_register);

export default WrappedLoginRegister;