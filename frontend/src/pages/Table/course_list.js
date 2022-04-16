import { Table, Divider, Tag, Input, Form, Button, PageHeader } from 'antd';
import request from 'umi-request'
import Auth from '../../store/auth'

class course_list extends React.Component {
    addPro = (event) => {
        event.preventDefault()
        // console.log(this.state)
        let self = this
        request.post('http://localhost:10000/api/admin/product', {
            data: {
                "product": {
                  "product_title": this.state.title,
                  "on_sale": 1
                },
                "categories":null,
                "images": [
                  {
                    "image_id": 2,
                    "sort": 0
                  }
                ],
                "content": null,
                "variants": [
                  {
                    "variant_title": this.state.title,
                    "price": parseInt(this.state.price),
                    "quantity": parseInt(this.state.stock)
                  }
                ]
              },
            headers: {Authorization: `Bearer ${Auth.Token}`}
        }).then(function (response) {
            self.setState({products : [...self.state.products, {
            id: 4,
            title: self.state.title,
            price: self.state.price,
            stock: self.state.stock}]})
        })
        
    }

    deletePro = (id) => {
        let self = this
        request.delete(`http://localhost:10000/api/admin/product/${id}`,
         {headers: {Authorization: `Bearer ${Auth.Token}`}})
        .then(function (response) {
            self.setState({products : self.state.products.filter((item) => {
                return item.id != id
            })})
        })
    }

    constructor(props) {
        super(props)

        this.state = {
            products: [],
            title: "",
            price: 0,
            stock: 0,
        }

        let self = this
        request
            .get('http://localhost:10000/api/product?page=1&pageSize=100?page=1&pageSize=100')
            .then(function (response) {
                let products = []
                response['body']['data'].forEach((v, i) => {
                    products.push({
                        id: v['id'],
                        title: v['product_title'],
                        price: v['price'],
                        stock: v['stock'],
                    })
                })
                self.setState({
                    products: products.filter((item) => {
                        let idx1 = item.title.indexOf("course")
                        let idx2 = item.title.indexOf("Course")
                        return idx1 != -1 || idx2 != -1
                    })
                })
            })
            .catch(function (error) {
                console.log(error)
                alert(error.data['message'])
            })

    }

    columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Course Name',
            dataIndex: 'title',
            key: 'product_title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
        },
        //     {
        //         title: 'Tags',
        //         key: 'tags',
        //         dataIndex: 'tags',
        //         render: tags => (
        //             <span>
        //     {tags.map(tag => {
        //         let color = tag.length > 7 ? 'geekblue' : 'green';
        //         if (tag === 'handcraft') {
        //             color = 'volcano';
        //         }
        //         return (
        //             <Tag color={color} key={tag}>
        //                 {tag.toUpperCase()}
        //             </Tag>
        //         );
        //     })}
        //   </span>
        //         ),
        //     },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a onClick={()=>{this.deletePro(record.id)}}>Delete</a>
                </span>
            ),
        },
    ];

    data = [
        {
            key: '1',
            service: 'Custom wood model',
            price: '$9.99',
            material: 'material 1, material 2, material 3...',
            tags: ['handcraft'],
        },
        {
            key: '2',
            service: 'Custom iron model',
            price: '$19.99',
            material: 'material 1, material 2, material 3...',
            tags: ['time-consuming'],
        },

        {
            key: '3',
            service: 'Custom glass model',
            price: '$29.99',
            material: 'material 1, material 2, material 3...',
            tags: ['fragile', 'limited'],
        },
    ];

    render() {

        return (
            <div>
                <Table columns={this.columns} dataSource={this.state.products} />

                <Form layout="inline" onSubmit={this.addPro}>
                    <Form.Item>
                        <text>Add New Course: </text>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            placeholder="Course Name"
                            value={this.state.title}
                            onChange={(p) => {this.setState({title : p.target.value})}}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            placeholder="Price"
                            value={this.state.price}
                            onChange={(p) => {this.setState({price : p.target.value})}}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            placeholder="stock"
                            type="stock"
                            value={this.state.stock}
                            onChange={(p) => {this.setState({stock : p.target.value})}}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Commit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default course_list;
