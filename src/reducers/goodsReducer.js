import goodsService from '../services/goods';
import {INIT_GOODS} from '../constants/ActionTypes'

const goodsReducer = (state = [], action) => {
    switch (action.type) {
        case INIT_GOODS:
            return action.data
        default:
            return state
    }
}

// 获取商品列表
export const initializeGoods = goods => {
    return async dispatch => {
        return goodsService.getAll().then(response => {
            dispatch({
                type: 'INIT_GOODS',
                data: response.data
            })
            return response
        })
    }
}

// 添加商品
export const addGoods = newGoods => {
    return  dispatch => goodsService.addGoods(newGoods)
}

// 更新商品
export const updateGoods = newGoods => {
    return  dispatch => goodsService.updateGoods(newGoods)
}

// 删除商品
export const delGoods = id => {
    return  dispatch => goodsService.delGoods(id)
}


export default goodsReducer