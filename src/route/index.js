const menuList = [
    {
        title: '首页',
        key:'/home',
        icon: 'mail'
    },
    {
        title: '商品',
        key:'/product',
        icon: 'mail',
        children: [
            {
                title: '品类管理',
                key:'/category',
                icon: 'mail'
            },
            {
                title: '商品管理',
                key:'/product',
                icon: 'mail'
            },
            {
                title: '角色管理',
                key:'/role',
                icon: 'mail'
            },
            {
                title: '用户管理',
                key:'/user',
                icon: 'mail'
            },
        ]
    },
    {
        title: '图形',
        key: '/charts',
        icon: 'mail',
        children: [
            {
                title: '线形',
                key:'/charts/line',
                icon: 'mail'
            },
            {
                title: '树形',
                key:'/charts/pie',
                icon: 'mail'
            },
            {
                title: '图形',
                key:'/charts/bar',
                icon: 'mail'
            },
        ]
    }
]
export default menuList;