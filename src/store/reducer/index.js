import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
//创建store和合并多个reducer
import thunk from 'redux-thunk'

import counterReducer from './counter'
import postReducer from './post'

const rootReducer = combineReducers({
    counter: counterReducer,
    post: postReducer
})
const store = createStore(
    rootReducer,
    //如果想在dispatch中使用异步请求，就需要使用中间件，thunk，compose是引入中间件
    compose(
        applyMiddleware(...[thunk])
    )
)

export default store;