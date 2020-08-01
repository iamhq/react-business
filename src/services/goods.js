import axios from 'axios'

const baseUrl = 'http://localhost:3001/goods'

const getAll = () => {
    return axios.get(baseUrl)
}

const addGoods = goods => {
    return axios.post(baseUrl, goods)
}

const delGoods = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updateGoods = goods => {
    return axios.put(`${baseUrl}/${goods.id}`, goods)
}

export default { getAll, addGoods, delGoods, updateGoods }