import { Table, Col, Row, Button } from 'antd';
import style from "../assets/css/cart.css";

class Cart extends React.Component {
    columns = [
        {
            title: 'Item',
            dataIndex: 'item',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            align: 'right',
        },
    ];

    itemList = [
        {
            item: "Item 1",
            amount: "$20",
        },
        {
            item: "Item 2",
            amount: "$40",
        },
        {
            item: "Item 3",
            amount: "$30",
        },
        {
            item: "Item 4",
            amount: "$70",
        },
    ];

    render() {
        const { cardsList, cardsLoading } = this.props;

        return (
            <div className={style["cart-container"]}>
                <Table columns={this.columns} dataSource={this.itemList} loading={cardsLoading} rowKey="id" />
                <Row>
                    <Col offset={22}><text>Total: $160</text></Col>
                    <Col offset={22}><Button>Checkout</Button></Col>
                </Row>
            </div>
        );
    }
    // ...
}

export default Cart;