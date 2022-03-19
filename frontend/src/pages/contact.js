import React from "react";
import {Form, Icon, Input, Button} from "antd";
import style from "../assets/css/contact.css";

class Contact extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className={style["contact-container"]}>
                <h1>Contact</h1>
                <Form className={style["contact-form-container"]} layout={"vertical"}>
                    <Form.Item>
                        {getFieldDecorator('firstname', {
                            rules: [{ required: true, message: 'Please input your first name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" className={style["field-icon"]} />}
                                placeholder={"First Name"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'Please input your last name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" className={style["field-icon"]} />}
                                placeholder={"Last Name"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone!' }],
                        })(
                            <Input
                                prefix={<Icon type="phone" className={style["field-icon"]} />}
                                placeholder={"Phone"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input
                                prefix={<Icon type="mail" className={style["field-icon"]} />}
                                placeholder={"Email"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('feedback', {
                            rules: [{ required: true, message: 'Please input your feedback!' }],
                        })(
                            <Input.TextArea
                                autoSize={{ minRows: 4, maxRows: 6 }}
                                placeholder={"Feedback"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type={"primary"} htmlType={"submit"} className={style["submit-btn"]}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const WrappedContact = Form.create({})(Contact);

export default WrappedContact;