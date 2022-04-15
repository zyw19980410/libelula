import { Table, Col, Row, Button } from 'antd';
import style from "../assets/css/cart.css";
import request from 'umi-request'
import Auth from '../store/auth'

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemList: [],
            sum: 0
        }

        let self = this
        request
        .get('http://localhost:10000/api/cart', {headers: {Authorization: `Bearer ${Auth.Token}`}})
        .then(function (response) {
            let products = []
            let sum = 0
            response['body'].forEach((v, i) => {
                sum += parseFloat(v['price'])
                products.push({
                    // id: v['id'],
                    // img: v['img'],
                    title: v['product_title'],
                    price: v['price'],
                })
            })
            self.setState({
                itemList: products,
                sum: sum
            })
        })
        .catch(function (error) {
            console.log(error)
            alert(error.data['message'])
        })
    }

    columns = [
        {
            title: 'Item',
            dataIndex: 'title',
        },
        {
            title: 'Amount',
            dataIndex: 'price',
            align: 'right',
        },
    ];

    render() {
        const { cardsLoading } = this.props;

        return (
            <div className={style["cart-container"]}>
                <Table columns={this.columns} dataSource={this.state.itemList} loading={cardsLoading} rowKey="id" />
                <Row>
                    <Col offset={22}><text>Total: ${this.state.sum}</text></Col>
                    <Col offset={22}><Button>Checkout</Button></Col>
                </Row>
            </div>
        );
    }
    // ...
}

export default Cart;