
import React from 'react'
import { Table, Button, Space } from "antd";

const List = ({ goods, onDelGoods, onEditGoods }) => {

    const imgStyle = {
        width: '100px',
        height: 'auto'
    }

    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            width: 50,
            render: (text, record, index) => <span>{index + 1}</span>,
        },
        {
            title: '商品名称',
            dataIndex: 'goodsName',
            render: text => <span>{text}</span>,
        },
        {
            title: '商品图片',
            dataIndex: 'goodsImg',
            render: text => <img src={require('../assets/images/apple-watch.png')} style={imgStyle} alt="true" />,
        },
        {
            title: '销售地区',
            dataIndex: 'area',
            render: text => <span>{text}</span>,
        },
        {
            title: '操作',
            dataIndex: 'action',
            render: (text, record) => (
                <Space>
                    <Button onClick={() => onEditGoods(record)} type="primary">编辑</Button>
                    <Button onClick={() => onDelGoods(record.id)}>删除</Button>
                </Space>
            ),
        },
    ]


    return (
        <Table bordered columns={columns} dataSource={goods} rowKey="id" />
    )
}

export default List