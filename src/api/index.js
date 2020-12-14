import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd'
// import { options } from 'less'
const BASE = 'http://localhost:8081'
// const BASE = ''
//配合package设置proxy

export const reqLogin = (username, password) =>  ajax(BASE + '/login', {username, password}, 'GET')
export const reqRegister = (username, password) =>  ajax(BASE + '/register', {username, password}, 'GET')
export const queryQuanxian = (username, password) =>  ajax(BASE + '/queryQuanxian', {}, 'GET')
export const addqueryQuanxian = (username, password) =>  ajax(BASE + '/addqueryQuanxian', {username}, 'GET')
export const queryEchartLine = (username, password) =>  ajax(BASE + '/queryEchartLine', {}, 'GET')
export const updataLineEcharts = (name, num) =>  ajax(BASE + '/updataLineEcharts', {name, num}, 'GET')

//category
export const addCategoryPar = (type, num, address) =>  ajax(BASE + '/addCategory', {type, num, address}, 'GET')
export const queryCategoryPar = () =>  ajax(BASE + '/queryCategory', {},'GET')
export const reqAdduser = (user) => ajax(BASE + '/manager/user/add', {user}, 'POST')

export const addTableProduct = (name, money) =>  ajax(BASE + '/addProduct', {name,money},'GET')
export const queryProduct = (name, money) =>  ajax(BASE + '/queryProduct', {},'GET')

export const updateChildCategory = (name, money) =>  ajax(BASE + '/updateChildCategory', {name, money},'GET')
export const queryChildCategoryPar = (state) =>  ajax(BASE + '/queryChildCategory', {state},'GET')
// jsonp请求的接口请求函数
export const reqWeather = () => {
    return new Promise((resolve, reject)=>{
        const url = ''
        //查找github的jsonp插件
        jsonp(url, {}, (err, data)=>{
            console.log(err)
            console.log(data)
            if(data){
                resolve(data)
            }else{
                message.error('请求失败');
            }
        })
    })
}