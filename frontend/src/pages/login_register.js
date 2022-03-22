import React from "react";
import {Col, Row, Form, Input, Icon, Button} from "antd";
import style from "../assets/css/loginregister.css";
import Role from "../store/role";
import {router} from "umi";

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
                            <Button type={"primary"} htmlType={"submit"} className={style["login-form-button"]}>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }

    // TODO(justxuewei): redirect to other pages
    doUserLogin = (event) => {
        const {form} = this.props
        if (form.getFieldValue('username') === "custom") {
            router.push("/customer")
            Role.CurrentRole = Role.CUSTOMER_ROLE
        } else if (form.getFieldValue('username') === "admin") {
            router.push("/admin/user_list")
            Role.CurrentRole = Role.ADMIN_ROLE
        } else if (form.getFieldValue('username') === "super-admin") {
            router.push("/admin/user_list")
            Role.CurrentRole = Role.ADMIN_ROLE
        } else {
            router.push("/")
            Role.CurrentRole = Role.ANONYMOUS_ROLE
        }
    }
}

const WrappedLoginRegister = Form.create({})(Login_register);

export default WrappedLoginRegister;