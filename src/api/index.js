import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd'
import { options } from 'less'
// const BASE = 'http://localhost:3000'
const BASE = ''
//配合package设置proxy

export const reqLogin = (username, password) =>  ajax(BASE + '/login', {username, password}, 'POST')

export const reqAdduser = (user) => ajax(BASE + '/manager/user/add', {user}, 'POST')

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