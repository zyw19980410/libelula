import React from "react";
import {Form, Icon, Input, Button} from "antd";

class Contact extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div style={{marginTop: "30px"}}>
                <h1>Contact</h1>
                <Form style={{margin: "50px 0 0 35%", width: "30%"}} layout={"vertical"}>
                    <Form.Item>
                        {getFieldDecorator('firstname', {
                            rules: [{ required: true, message: 'Please input your first name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={"First Name"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'Please input your last name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={"Last Name"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone!' }],
                        })(
                            <Input
                                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={"Phone"}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
                        <Button type={"primary"} htmlType={"submit"} style={{width: "100%"}}>
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