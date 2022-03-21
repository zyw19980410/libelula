import {Table, Divider, Tag} from 'antd';

class location_list extends React.Component {

    columns = [
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            render: text => <a>{text}</a>,
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'Business',
            dataIndex: 'business',
            key: 'business',
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
            location: 'Boston',
            state: 'MA',
            business: 'business 1, business 2, business 3...',
            tags: ['base'],
        },
        {
            key: '2',
            location: 'Arlington',
            state: 'TX',
            business: 'business 1, business 2, business 3...',
            tags: ['limited'],
        },
        {
            key: '3',
            location: 'San Francisco',
            state: 'CA',
            business: 'business 1, business 2, business 3...',
            tags: ['flagship'],
        },
    ];

    render() {
        return (
            <Table columns={this.columns} dataSource={this.data} />
        )
    }
}

export default location_list;