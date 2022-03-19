import React from "react";
import { Form, Input, Button, Row, Col, Card } from "antd";
import DemoPic from "../assets/images/demo3.jpeg";
import style from "../assets/css/index.css";

class Index extends React.Component {
    render() {
        return (
            <div>
                <Row align="middle" justify="center" className={style["index-head"]}>
                    <Col span={12} offset={6}>
                        <span>This is Libelula</span>
                        <h1>Welcome to a new shopping experience!</h1>
                        <div>
                            <Form
                                name="search"
                                layout="inline"
                            >
                                <Form.Item
                                    name="keyword"
                                    rules={[{ required: true, message: 'Please input keyword!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Search
                                    </Button>
                                </Form.Item>
                            </Form>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={18} offset={3}>
                        <Row className={style["content"]}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate, sunt distinctio hic rerum temporibus numquam voluptas magni a dolor! Expedita praesentium cupiditate a. Aspernatur quidem impedit quasi adipisci officia?
                        </Row>
                        <Row type="flex" justify="space-around" align="middle" className={style["content"]}>
                            <Col span={12}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate, sunt distinctio hic rerum temporibus numquam voluptas magni a dolor! Expedita praesentium cupiditate a. Aspernatur quidem impedit quasi adipisci officia?</Col>
                            <Col span={12}>
                                <img alt={""} src={DemoPic} className={style["content-img"]}/>
                            </Col>
                        </Row>

                    </Col>

                </Row>
            </div>
        )
    }
}

export default Index;