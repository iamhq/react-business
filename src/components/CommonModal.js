import React, { useEffect } from 'react'
import { Button, Form, Input, Modal, Space } from "antd";

const CommonModal = ({ visible, onAddGoods, onEditGoods, closeCommonModal, editData }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (editData) {
            form.setFieldsValue(editData)
        }
    })

    const handleCancel = e => {
        resetForm();
        closeCommonModal();
    };

    // 验证通过，发送请求
    const onFinish = values => {
        console.log(Boolean(editData))
        if (editData) {
            onEditGoods({ ...values, id: editData.id })
        } else {
            onAddGoods(values)
        }
    };

    const resetForm = () => {
        form.resetFields();
    };

    // prop:formItem layout
    const tailLayout = {
        wrapperCol: {
            offset: 4,
            span: 20,
        }
    };

    return (
        <div className="common-modal">
            <Modal
                forceRender
                title={editData ? '修改商品' : '添加商品'}
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    name="common-form"
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="商品名称"
                        name="goodsName"
                        rules={[
                            {
                                required: true,
                                message: '请输入商品名称',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="销售地区"
                        name="area"
                        rules={[
                            {
                                required: true,
                                message: '请输入商品销售地区',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Space>
                            <Button type="primary" htmlType="submit" >{editData ? '确认修改' : '确认'}</Button>
                            <Button onClick={handleCancel}>取消</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )

}
export default CommonModal
