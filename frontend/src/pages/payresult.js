import { Table, Col, Row, Button, message } from 'antd';
import style from "../assets/css/payresult.css";
import CartList from '../store/cartList';
import orderList from '../store/orderList';

class Payresult extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        itemList: [],
        time : '',
        amount : 0,
        index : 0,
    }
    var itemList = []
    var sum = 0
    debugger
    CartList.carts.forEach (function(item,index){
        itemList.push(item)
        sum += item.price
    })
    CartList.carts.splice(0,CartList.carts.length)
    this.state = {
      itemList : itemList,
      time : this.getTime(),
      amount : sum,
      index : orderList.index-1,
    }
    console.log(this.state)
  }
  columns = [
    {
        title: 'Item',
        dataIndex: 'title',
    },
    {
        title: 'Image',
        dataIndex: 'img',
        render: (img) =>(<img src={require(`../images/thumbnail/${img}`)} alt="" className={style["cart-img"]} ></img>)           
    },
    {
        title: 'Amount',
        dataIndex: 'price',
        align: 'right',
    },
  ];
  getTime = ()=>{
    var date = new Date();
      console.log(date.getFullYear());
      console.log(date.getMonth() + 1);
      console.log(date.getDate()); 
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var dates = date.getDate();
      var day = date.getDay();
      var h = date.getHours();
      h = h < 10 ? '0' + h : h;
      var m = date.getMinutes();
      m = m < 10 ? '0' + m : m;
      var s = date.getSeconds();
      s = s < 10 ? '0' + s : s;
      return month + '/' + dates + '/' + year + ' ' + h + ':' + m + ':' + s
  }
  render() {
    const { cardsLoading } = this.props;

    return (
      
        <div className={style["result"]}>
         
          <Row>
            <Col ><text>Pay order: {this.state.index}</text></Col>
            <Col ><text>Payment time: {this.state.time}</text></Col>
            <Col ><text>Payment amount: {this.state.amount}</text></Col>
          </Row>
          <Table columns={this.columns} dataSource={this.state.itemList} loading={cardsLoading} rowKey="id" />
        </div>
    )
  }
}
export default Payresult;