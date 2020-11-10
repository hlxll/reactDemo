import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import App from './App'

// import storage from './utils/storage'
// import memoryUnit from './utils/memoryUnit'

//每次获取local数据
// const user = storage.getUser()
//再将数据存到memoryUnit，方便在不同组件使用数据
// memoryUnit.user = user
ReactDOM.render(<App/>,document.getElementById('root'))