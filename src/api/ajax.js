import axios from 'axios'
import { message } from 'antd'
export default function ajax(url, data={}, methods='GET', ){
    //优化处理异常，在外面包一个promise，统一处理
    return new Promise((resolve, reject) => {
        let response = ''
        if(methods === 'GET'){
            response =  axios.get(url, {
                params: data
            })
        }else{
            response = axios.post(url, data)
        }
        response.then((res)=>[
            resolve(res)
        ]).catch((err)=>{
            message.error('接口请求错误');
        })
    })
}
