import axios from 'axios'
export default function ajax(url, data={}, methods='GET', ){
    if(methods == 'GET'){
        return axios.get(url, {
            params: data
        })
    }else{
        return axios.post(url, data)
    }
}
p20