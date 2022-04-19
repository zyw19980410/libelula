import { Button, message, List, Avatar, Form, Input } from 'antd';
import style from "../assets/css/cart.css";
import socket from '../socket'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [{ sender: 'Libelula', receiver: 'Customer', text: 'some text', createTime: '2022-04-19 19:31:36', senderPhotoNickname: 'L' }],
            input: "",
        }
        socket.on('connect', () => {
            socket.emit('online', 'Customer');
            console.info('online')
        });
        socket.on('reply_private_chat', this.replyPrivateMessage);

    }
    componentDidMount() {
        console.log('componentDidMount')
        this.setState({ ws: socket })
        console.log(socket)
    }
    sendMsg = () => {
        let message = {
            sender: 'Customer',
            receiver: 'Libelula',
            text: this.state.input,
        };
        socket.emit('private_chat', message, data => {
            console.log(data)
            this.updateMsgBox(data)
        });
    }
    updateMsgBox = (data) => {
        this.setState({ messages: [...this.state.messages, data] })
    }
    replyPrivateMessage = (data) => {
        console.info(data)
        this.updateMsgBox(data)
    }
    inputHandler = (e) => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div className={style["cart-container"]}>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.messages}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
                                        {item.senderPhotoNickname}
                                    </Avatar>}
                                title={`${item.sender} @ ${item.createTime}`}
                                description={item.text}
                            />
                        </List.Item>
                    )}
                />
                <Form layout="inline">
                    <Form.Item>
                        <Input placeholder="Message" value={this.state.input} onChange={this.inputHandler} />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.sendMsg}>Send</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
    // ...
}

export default Chat;