import React from "react";
import {Row, Col, Card, Button} from "antd";
import style from "../assets/css/service.css"
import request from 'umi-request'


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
                    <Button type="primary">Add to cart</Button>
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
                alert(error.data['message'])
            })
    }

    render() {
        let service_cards = []
        for (let i = 0; i < this.state.services.length; i++) {
            service_cards.push(<ServiceCard service={this.state.services[i]}/>)
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