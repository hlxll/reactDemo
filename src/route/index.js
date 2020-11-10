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
                title: '商品管理',
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
]
export default menuList;