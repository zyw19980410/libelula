import { Table, Col, Row, Button, message } from 'antd';
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
                    id: v['variant_id'],
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
            if (Auth.Token === "") {
                message.error("Not logged in")
                self.props.history.push('login_register/')
            }
            
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

    handleOrder = () => {
        let items = []
        this.state.itemList.map((item) => {
            items.push({"variant_id": item.id, "quantity":1})
        })
        let self = this
        request.post('http://localhost:10000/api/order', {
            headers: { Authorization: `Bearer ${Auth.Token}`},
            data: {
                address:{
                    name:"order tester",
                    province:"beijing",
                    city:"beijing",
                    district:"haidian",
                    detail:"bupt",
                    mobile:"13099998888",
                    zip:null
                },
                items: items
            }
        })
            .then(function (response) {
                message.success("Ordered!")
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        const { cardsLoading } = this.props;

        return (
            <div className={style["cart-container"]}>
                <Table columns={this.columns} dataSource={this.state.itemList} loading={cardsLoading} rowKey="id" />
                <Row>
                    <Col offset={22}><text>Total: ${this.state.sum}</text></Col>
                    <Col offset={22}><Button onClick={this.handleOrder}>Checkout</Button></Col>
                </Row>
            </div>
        );
    }
    // ...
}

export default Cart;