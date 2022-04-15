import React from "react";
import { Icon, Row, Col, Modal, message } from "antd";
import style from "../assets/css/customer.css";
import request from 'umi-request'
import Auth from '../store/auth'

class Customer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            currentProduct: {},
            products:[]
        }

        let self = this
        request
        .get('http://localhost:8081/public/api/product?page=1&pageSize=100?page=1&pageSize=100')
        .then(function (response) {
            let products = []
            response['body']['data'].forEach((v, i) => {
                products.push({
                    id: v['id'],
                    img: v['img'],
                    title: v['product_title'],
                    price: v['price'],
                    stock: v['stock'],
                })
            })
            self.setState({
                products: products
            })
        })
        .catch(function (error) {
            console.log(error)
            alert(error.data['message'])
        })

    }
    listItems = [
        "This is a list",
        "Another list item",
        "Yup, another list",
        "This is a list",
        "Another list item",
        "Yup, another list",
        "This is a list",
        "Another list item",
        "Yup, another list",
    ]
    showModal = id => {
        self = this
        request.get(`http://localhost:10000/api/product/${id}`)
        .then(function (response) {
            self.setState({
                currentProduct: {
                    id: id,
                    title: response.body.product['product_title'],
                    desc: response.body.product['product_des'],
                    img: response.body.images[0]['url'],
                    price: response.body.variants[0]['price'],
                    variant_id: response.body.variants[0]['id'],
                },
                modalVisible: true,
            })
        })
        .catch(function (error) {
            console.log(error)
            alert(error.data['message'])
        })
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
        if (Auth.Token === "") {
            message.error("Please log in!")
            return
        }
        request.post('http://localhost:10000/api/cart', {
            data: {variant_id: this.state.variant_id, quantity: 1},
            headers: {Authorization: Auth.Token}
        })
        .then(function (response) {
            self.setState({
                modalVisible: true,
            })
        })
        .catch(function (error) {
            console.log(error)
        }
            
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };
    render() {
        return (
            <div>
                <Modal title="Detail" visible={ this.state.modalVisible } okText="Add to cart" onCancel={ this.handleCancel } onOk={ this.handleOk }>
                    <h2>{this.state.currentProduct.title}</h2>
                    <img src={this.state.currentProduct.img} alt="" className={style["detail-img"]} />
                    <p className={style['price-tag']}>Price: $ {this.state.currentProduct.price}</p>
                    <div dangerouslySetInnerHTML={{ __html: this.state.currentProduct.desc }} />
                </Modal>
                {/* Page title */}
                <Row >
                    <Col span={22}>
                        <h1>Hello Customer</h1>
                    </Col>
                    <Col offset={22}>
                        <Icon type="shopping-cart" className={style.cartIcon} />
                    </Col>
                </Row>

                <Row>
                    <Col span={19}>

                        <Row gutter={[16, 16]}>
                            <h2>Explore Products</h2>
                            {
                                this.state.products.map((item, idx) => {
                                    return <Col span={4} key={item.id} onClick={() => this.showModal(item.id)}><ItemTile hasIcon={true} size={"big"} name={item.title} image={item.img}></ItemTile></Col>
                                })
                            }
                        </Row>

                        {/* <Row gutter={[16, 16]}>
                            <h2>Explore Courses</h2>
                            {
                                this.state.products.map((item, idx) => {
                                    return <Col span={4} key={item.id} onClick={() => this.showModal(item.id)}><ItemTile hasIcon={true} size={"big"} name={item.name} image={item.img}></ItemTile></Col>
                                })
                            }
                        </Row>

                        <Row gutter={[16, 16]}>
                            <h2>Explore Bakery</h2>
                            {
                                this.state.products.map((item, idx) => {
                                    return <Col span={4} key={item.id} onClick={() => this.showModal(item.id)}><ItemTile hasIcon={true} size={"big"} name={item.name} image={item.img}></ItemTile></Col>
                                })
                            }
                        </Row> */}
                    </Col>

                    {/* Sidebar list */}
                    <Col offset={19}>
                        <ul>
                            {
                                this.listItems.map((item, idx) => {
                                    return <li>{item}</li>
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}

class ItemTile extends React.Component {
    // className = style.tile + " " + (this.props.size === "big" ? style['tile-big'] : style['tile-small'])
    className = style.tile + " " + style['tile-big']
    render() {
        return (
            <div className={this.className}>
                <span className={style.desc}>{this.props.name}</span>
                <img src={this.props.image} alt="" />
                {
                    this.props.hasIcon && <span className={style.addCart + " " + style.cartIcon}><Icon type="shopping-cart" /></span>
                }
            </div>
        )
    }
}

export default Customer;