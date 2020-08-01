import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import goodsReducer from '../reducers/goodsReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    goods: goodsReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store

