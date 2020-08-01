import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeGoods, addGoods, delGoods, updateGoods } from '../reducers/goodsReducer'
import { message, Button, Alert, Space } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import CommonModal from '../components/CommonModal'
import List from '../components/List'
import "antd/dist/antd.css";
import '../assets/css/App.css'

function App() {
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(null);
  const [visible, setVisible] = useState(false);
  const goods = useSelector(state => state.goods)

  useEffect(() => {
    getList()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps  

  // 查询列表
  const getList = () => {
    dispatch(initializeGoods()).catch(err => {
      message.error('查询失败！请执行命令 npm run server 启动 json-server 服务器')
    })
  }

  // 删除
  const handleDelGoods = (id) => {
    dispatch(delGoods(id)).then(() => {
      getList();
      message.success('删除成功！');
    }).catch(err => {
      message.error('删除错误！');
    })
  }

  // 添加
  const handleAddGoods = (goods) => {
    dispatch(addGoods(goods)).then(() => {
      getList();
      message.success('添加成功！');
      closeCommonModal();
    }).catch(err => {
      message.error('添加错误！');
    })
  }

  // 修改
  const handleEditGoods = goods => {
    dispatch(updateGoods(goods)).then(() => {
      getList();
      message.success('修改成功！');
      closeCommonModal();
    }).catch(err => {
      message.error('修改错误！');
    })
  }

  // 显示通用对话框
  const showModal = () => {
    setVisible(true);
  };

  // 显示通用对话框(编辑)
  const showEditModal = (goods) => {
    setEditData(goods);
    showModal();
  }

  // 关闭通用对话框
  const closeCommonModal = () => {
    setEditData(null);
    setVisible(false);
  }

  return (
    <div className="App">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>

        {/* 提示 */}
        <Alert
          message="请执行命令 npm run server 启动 json-server 服务器"
          type="warning"
        />

        {/* 添加商品 */}
        <Button icon={<PlusOutlined />} type="primary" onClick={showModal}>添加商品</Button>

        {/* 通用对话框 添加/删除 操作 */}
        <CommonModal editData={editData} onAddGoods={handleAddGoods} onEditGoods={handleEditGoods} visible={visible} closeCommonModal={closeCommonModal} />

        {/* 商品列表 */}
        <List goods={goods} onDelGoods={handleDelGoods} onEditGoods={showEditModal} />

      </Space>


    </div>
  );
}

export default App;
