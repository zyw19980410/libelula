import React from "react";
import { Icon, Row, Col, Modal, message } from "antd";
import style from "../assets/css/customer.css";
import request from 'umi-request'
import Auth from '../store/auth'
import CartList from "../store/cartList"
import {router} from "umi";
import orderList from "../store/orderList";

class Customer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            currentProduct: {img : "1.jpg"},
            products: [],
            orders: []
        }

        let self = this
        request
            .get('http://localhost:10000/api/product?page=1&pageSize=100?page=1&pageSize=100')
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
                // console.log(error)
                // alert(error.data['message'])
                self.setState({
                    products: [{
                        id: 1,
                        img: '1.jpg',
                        desc: "a cheap saree.",
                        title: 'saree1',
                        price: 50,
                        stock: 100,
                    },{
                        id: 2,
                        img: '2.jpg',
                        desc: "a beautiful saree.",
                        title: 'saree2',
                        price: 100,
                        stock: 100,
                    }]
                })
            })

        request
            .get('http://localhost:10000/api/order?page=1&pageSize=15&name=&no=20&status=', {headers: {Authorization: `Bearer ${Auth.Token}`}})
            .then(function (response) {
                let orders = []
                response['body']['data'].forEach((v, i) => {
                    orders.push({
                        no: v['no'],
                        amount: v['amount'],
                        status: v['status'],
                    })
                })
                self.setState({
                    orders: orders
                })
            })
            .catch(function (error) {
                console.log(error)
                // alert(error.data['message'])
                debugger
                var aaa = orderList.orders
                self.setState({
                    orders: orderList.orders
                })
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
    showModal = item => {
        self = this
        request.get(`http://localhost:10000/api/product/${item.id}`)
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
                // console.log(error)
                // alert(error.data['message'])
                self.setState({
                    currentProduct: {
                        id: item.id,
                        title: item.title,
                        desc: item.desc,
                        img: item.img,
                        price: item.price,
                        variant_id: "response.body.variants[0]['id']",
                    },
                    modalVisible: true,
                })
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
            data: { variant_id: this.state.currentProduct.variant_id, quantity: 1 },
            headers: { Authorization: `Bearer ${Auth.Token}` }
        })
            .then(function (response) {
                self.setState({
                    modalVisible: false,
                })
            })
            .catch(function (error) {
                CartList.carts.push(self.state.currentProduct)
            })
    };
    toCart = e => {
        router.push("/cart")                
    }
    handleCancel = e => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };
    render() {
        return (
            <div>
                <img src={require("../images/thumbnail/ad.png")} alt="" className={style["ad-img"]} />
                <div className='pannerPic'>
                 </div>
                <Modal title="Detail" visible={this.state.modalVisible} okText="Add to cart" onCancel={this.handleCancel} onOk={this.handleOk}>
                    
                    <h2>{this.state.currentProduct.title}</h2>
                    <img src={require(`../images/thumbnail/${this.state.currentProduct.img}`)} alt="" className={style["detail-img"]} ></img>
                    <p className={style['price-tag']}>Price: $ {this.state.currentProduct.price}</p>
                    <div dangerouslySetInnerHTML={{ __html: this.state.currentProduct.desc }} />
                </Modal>
                {/* Page title */}
                <Row >
                    <Col span={22}>
                        <h1>Hello Customer</h1>
                        

                    </Col>
                    <div>
                        
                    </div>
                    
                    
                    <Col offset={18}>
                        <Icon type="shopping-cart" className={style["cartIcon"]} onClick={this.toCart} />
                    </Col>
                </Row>

                <Row>
                    <Col span={19}>
                     <h1> </h1>

                        <Row gutter={[16, 16]}>
                            <h2>Explore Products</h2>
                            {
                                this.state.products.map((item, idx) => {
                                    return <Col span={4} key={item.id} onClick={() => this.showModal(item)}><ItemTile hasIcon={true} size={"big"} name={item.title} image={item.img}></ItemTile></Col>
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
                    <h1>    Order List</h1>
                        <ul>
                            {
                                this.state.orders.map((item, idx) => {
                                    return <li key={idx}>NO: {item.no} Amount: {item.amount}</li>
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
                <img src={require(`../images/thumbnail/${this.props.image}`)} alt="" />
                {
                    this.props.hasIcon && <span className={style.addCart + " " + style.cartIcon}><Icon type="shopping-cart" /></span>
                }
            </div>
        )
    }
}

export default Customer;