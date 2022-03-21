import {Table, Divider, Tag} from 'antd';

class order_list extends React.Component {

    columns = [
        {
            title: 'Order number',
            dataIndex: 'number',
            key: 'number',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
        {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'urgent') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
        <a>Cancel order</a>
      </span>
            ),
        },
    ];

    data = [
        {
            key: '1',
            number: '10001',
            price: '$9.99',
            address: 'New York No. 1 Lake Park',
            tags: ['urgent', 'air express'],
        },
        {
            key: '2',
            number: '10002',
            price: '$78.05',
            address: 'Austin No. 1 Lake Park',
            tags: ['normal express'],
        },
        {
            key: '3',
            number: '10003',
            price: '$199.99',
            address: 'Dallas No. 1 Lake Park',
            tags: ['air express', 'fragile'],
        },
    ];

    render() {
        return (
            <Table columns={this.columns} dataSource={this.data} />
        )
    }

}

export default order_list;