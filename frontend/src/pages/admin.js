import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';

const { Header, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class AdminMenu extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: "white", background: "white" }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>User Management</span>
                            <Link to="/admin/user_list">user_list</Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
                        >
                            <Menu.Item key="2"><Link to="/admin/graph1">graph1</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/admin/graph2">graph2</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/admin/graph3">graph3</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="table" /><span>Management</span></span>}
                        >
                            <Menu.Item key="5"><Link to="/admin/order_list">Order</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/admin/service_list">Service</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/admin/course_list">Course</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/admin/location_list">Location</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/admin/product_list">Product</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout >
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0, fontSize: 18 }}>Libelula Admin</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}