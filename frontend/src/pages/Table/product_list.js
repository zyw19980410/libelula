import {Table, Divider, Tag} from 'antd';

class product_list extends React.Component {

    columns = [
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Material',
            dataIndex: 'material',
            key: 'material',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
        {tags.map(tag => {
            let color = tag.length > 7 ? 'geekblue' : 'green';
            if (tag === 'handcraft') {
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
        <a>Modify</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
            ),
        },
    ];

    data = [
        {
            key: '1',
            product: 'shoes',
            price: '$9.99',
            material: 'material 1, material 2, material 3...',
            tags: ['handcraft'],
        },
        {
            key: '2',
            product: 'bag',
            price: '$19.99',
            material: 'material 1, material 2, material 3...',
            tags: ['handcraft', 'limited'],
        },
        {
            key: '3',
            product: 'belt',
            price: '$14.99',
            material: 'material 1, material 2, material 3...',
            tags: ['cowhide', 'limited'],
        },
    ];

    render() {
        return (
            <Table columns={this.columns} dataSource={this.data} />
        )
    }
}

export default product_list;