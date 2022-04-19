import React from "react";
import {Layout, Menu, Row, Col, Button} from "antd";
import Link from "umi/link";
import style from "../assets/css/layouts.css";
import Auth from "../store/auth"

const {Header, Content, Footer} = Layout;

class IndexLayout extends React.Component {
    state = {
        selectedMenu: "0"
    }

    checkMenu() {
        console.log("check menu")
        // TODO: check the menu
    }

    componentDidMount() {
        this.checkMenu()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkMenu()
    }

    render() {
        return (
            <Layout className="layout">
                <Header>
                    <Row>
                        <Col span={4}>
                            <div className={style["logo"]}>Libelula</div>
                        </Col>
                        <Col span={14}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                className={style["menu"]}
                            >
                                <Menu.Item key="1"><Link to={"/"}>Home</Link></Menu.Item>
                                <Menu.Item key="2"><Link to={"/service"}>Service</Link></Menu.Item>
                                <Menu.Item key="3"><Link to={"/contact"}>Contact</Link></Menu.Item>
                                <Menu.Item key="4"><Link to={"/about"}>About</Link></Menu.Item>
                                <Menu.Item key="5"><Link to={"/cart"}>Cart</Link></Menu.Item>
                                <Menu.Item key="6"><Link to={"/chat"}>Chat</Link></Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={6} className={style["menu-right"]}>
                            <Button type="primary" shape="circle" icon="search" className={style["float-right"]}/>
                            <Button ghost className={style["ghost-btn"]} type="link">
                                {Auth.Token === "" ? <Link to={"/login_register"}>Login/Register</Link> : <Link to={"/customer"}>Customer</Link>}
                            </Button>
                            <div className={style["clear"]}/>
                        </Col>
                    </Row>
                </Header>
                <Content className={style["content"]}>
                    <div className={style["service-content"]}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer className={style["footer"]}>
                    Libelula 2022 - Designed by Xuewei Niu, Miaochen Li &amp; Lingkun Sun
                </Footer>
            </Layout>
        )
    }
}

export default IndexLayout;
