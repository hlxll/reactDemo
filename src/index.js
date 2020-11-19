import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
//创建store和合并多个reducer
import thunk from 'redux-thunk'
import 'antd/dist/antd.css'
import App from './App'

const counterReducer = function(state = {count: 1}, action){
    console.log(action)
    switch(action.type){
        case 'COUNT_ADD':
            return{
                ...state, count: state.count + 1
            }
        default :
            return state
    }
}
const postReducer = function(state = {list: [{title: '你好'}]}, action){
    console.log(action)
    switch(action.type){
        case 'TITLE_ADD':
            return{
                ...state, list: action.payload
            }
        default :
            return state
    }
}
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
console.log(store)
console.log(store.getState())
store.dispatch({
    type: 'COUNT_ADD',
    payload: {}
})
console.log(store)
console.log(store.getState())
store.dispatch({
    type: 'TITLE_ADD',
    payload: [{title: '老大'}]
})
console.log(store)
console.log(store.getState())
//异步dispatch
// store.dispatch(function(dispatch){
//     dispatch({
//         type: '',
//         payload: ''
//     })
// })
// import storage from './utils/storage'
// import memoryUnit from './utils/memoryUnit'

//每次获取local数据
// const user = storage.getUser()
//再将数据存到memoryUnit，方便在不同组件使用数据
// memoryUnit.user = user
ReactDOM.render(<App/>,document.getElementById('root'))