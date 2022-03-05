import React from "react";
import {Layout, Menu, Row, Col, Button} from "antd";
import Link from "umi/link";

const {Header, Content, Footer} = Layout;

const contentStyle = {
    padding: "50px",
    background: "white",
}

const logoStyle = {
    color: "white",
    lineHeight: "64px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "22px",
}

class IndexLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <Row>
                        <Col span={4}>
                            <div style={logoStyle}>Libelula</div>
                        </Col>
                        <Col span={16}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{lineHeight: '64px', display: "inline"}}
                            >
                                <Menu.Item key="1"><Link to={"/"}>Home</Link></Menu.Item>
                                <Menu.Item key="2"><Link to={"/service"}>Service</Link></Menu.Item>
                                <Menu.Item key="3"><Link to={"/contact"}>Contact</Link></Menu.Item>
                                <Menu.Item key="4"><Link to={"/about"}>About</Link></Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={4} style={{height: "64px", paddingTop: "16px"}}>
                            <Button type="primary" shape="circle" icon="search" style={{float: "right"}}/>
                            <Button ghost style={{textAlign: "center", marginRight: "25px", float: "right"} } type="link" href={"/loginregister"}>Login/Register</Button>
                            <div style={{clear: "both"}}/>
                        </Col>
                    </Row>
                </Header>
                <Content style={{padding: '30px 50px'}}>
                    <div style={contentStyle}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Libelula 2022 - Designed by Xuewei Niu, Miaochen Li & Lingkun
                    Sun</Footer>
            </Layout>
        )
    }
}

export default IndexLayout;
