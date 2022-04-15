import style from "../assets/css/owner_admin.css";
import { Col, Row, Button, PageHeader, Input, Card, Select } from 'antd';
import DemoPic from "../assets/images/demo3.jpeg";

const { Option } = Select;

class AdminItem extends React.Component {
    render() {
        return (
            <div className={style["admin_item"]}>
                <Row gutter={[8, 8]}>
                    <Col span={24}> <PageHeader title="Title1"> </PageHeader>  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={14}>
                        <Input placeholder="Some Input" className={style["comp_space"]}/>
                        <Input placeholder="Some Input" className={style["comp_space"]}/>
                        <Row gutter={[16, 16]}>
                        <Select defaultValue= "Make a selection" className={style["select_space"]}>
                            <Option value="option1"> option1 </Option>
                            <Option value="option2"> option2 </Option>
                            <Option value="option3"> option3 </Option>
                        </Select>
                            <Button className={style["button_space"]}>Some Button</Button>
                        </Row>
                    </Col>
                    <Col span={10}>
                        <Card cover={<img alt={""} src={DemoPic} />}>
                            <Card.Meta title="Service 1" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

class OwnerAdmin extends React.Component {
    render() {
        return (
            <div className={style["owner_admin"]}>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <AdminItem/>
                    </Col>
                    <Col span={12}>
                        <AdminItem/>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <AdminItem/>
                    </Col>
                    <Col span={12}>
                        <AdminItem/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default OwnerAdmin;