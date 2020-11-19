const USER = 'user'
//原生方法有些不支持，可以使用库store，
export default { //保存
    saveUser(user){
        localStorage.setItem(USER, JSON.stringify(user))
    },
    //读取
    getUser(){
        return JSON.parse(localStorage.getItem(USER)||'{}')
    },
    removeUser(){
        return localStorage.removeItem(USER)
    }
}