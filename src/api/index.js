import ajax from './ajax'
// const BASE = 'http://localhost:3000'
const BASE = ''
//配合package设置proxy

export const reqLogin = (username, password) =>  ajax(BASE + '/login', {username, password}, 'POST')

export const reqAdduser = (user) => ajax(BASE + '/manager/user/add', {user}, 'POST')