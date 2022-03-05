import React from "react";
import {Row, Col, Card} from "antd";
import DemoPic from "../assets/images/demo3.jpeg";

class Service extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Service</h1>
                </div>
                <div style={{marginTop: "30px"}}>
                    <Row gutter={[16, 32]}>
                        <Col span={8}>
                            <Card cover={<img alt={""} src={DemoPic} />}>
                                <Card.Meta title="Service 1" description="Service 1 Description Service 1 Description Service 1 Description Service 1 Description" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card cover={<img alt={""} src={DemoPic} />}>
                                <Card.Meta title="Service 2" description="Service 1 Description Service 1 Description Service 1 Description Service 1 Description" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card cover={<img alt={""} src={DemoPic} />}>
                                <Card.Meta title="Service 3" description="Service 1 Description Service 1 Description Service 1 Description Service 1 Description" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card cover={<img alt={""} src={DemoPic} />}>
                                <Card.Meta title="Service 4" description="Service 1 Description Service 1 Description Service 1 Description Service 1 Description" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card cover={<img alt={""} src={DemoPic} />}>
                                <Card.Meta title="Service 5" description="Service 1 Description Service 1 Description Service 1 Description Service 1 Description" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card cover={<img alt={""} src={DemoPic} />}>
                                <Card.Meta title="Service 6" description="Service 1 Description Service 1 Description Service 1 Description Service 1 Description" />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Service;