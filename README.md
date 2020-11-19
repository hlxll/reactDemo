# build
使用npm run build构建开发环境，然后使用serve build启动

# 分支管理 
在公司使用work分支开发，在私人电脑使用dev分支开发，检查无误最后合并到master分支
# 路由
两种路由区别 ？

# 配置
## 加入less，先下模块，再改动module里面的react-script的config  ，里面的webpack。config.js，将sass相关改成less
加入less，先下模块，再改动module里面的react-script的config  ，里面的webpack。config.js，将sass相关改成less

# 动态显示category一级列表
为什么点击按钮传参数要在回调中，不能直接传参数

# setState
第一个参数可以是函数，或者对象
第二个参数是回调函数，当更新数据，马上取数据不能得到最新的值，只有在回调函数中才可以获取
setState在生命周期勾子和回调函数中使用是异步的
在定时器回调和原生事件监听回调和promise回调是同步的
## 函数
this.setState(state => ())
## 对象
this.setState({})

## 区别
如果新数据依赖原来数据就用函数形式写，如果不依赖就用对象形式写

## 异步setState
多个setState时候，
