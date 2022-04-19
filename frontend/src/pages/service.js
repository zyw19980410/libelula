import React from "react";
import {Row, Col, Card, Button, message} from "antd";
import style from "../assets/css/service.css"
import request from 'umi-request'
import Auth from '../store/auth'

class ServiceCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col span={8}>
                <Card cover={<img height={"200"} alt={""} src={this.props.service.img}/>}>
                    <Card.Meta title={this.props.service.title}/>
                    <p/>
                    <p>Price: ${this.props.service.price}<br/>Stock: {this.props.service.stock}
                    </p>
                    <Button type="primary" onClick={()=>{this.props.parent.handleOrder(this.props.service.id)}}>Add to cart</Button>
                </Card>
            </Col>
        )
    }
}

class Service extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            services: []
        }

        self = this
        request
            .get('http://localhost:10000/api/product?page=1&pageSize=100?page=1&pageSize=100')
            .then(function (response) {
                let services = []
                response['body']['data'].forEach((v, i) => {
                    services.push({
                        id: v['id'],
                        img: v['img'],
                        title: v['product_title'],
                        price: v['price'],
                        stock: v['stock'],
                    })
                })
                self.setState({
                    services: services
                })
            })
            .catch(function (error) {
                console.log(error)
                // alert(error.data['message'])
            })
    }

    handleOrder = variant_id => {
        if (Auth.Token === "") {
            message.error("Please log in!")
            return
        }
        request.post('http://localhost:10000/api/cart', {
            data: { variant_id: variant_id, quantity: 1 },
            headers: { Authorization: `Bearer ${Auth.Token}` }
        })
            .then(function (response) {
                message.success("Added")
            })
            .catch(function (error) {
                console.log(error)
            })
    };
    render() {
        let service_cards = []
        for (let i = 0; i < this.state.services.length; i++) {
            service_cards.push(<ServiceCard service={this.state.services[i]} parent={this}/>)
        }
        return (
            <div>
                <div>
                    <h1>Services</h1>
                </div>
                <div className={style["service-container"]}>
                    <Row gutter={[16, 32]}>
                        {service_cards}
                    </Row>
                </div>
            </div>
        )
    }
}

export default Service;