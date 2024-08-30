// 导入express
const express =require('express');

// 创建应用对象
const app=express();

// 创建静态资源中间件
app.use(express.static(__dirname+'/public'))
// 创建路由
app.get('/',(req,res)=>{
    res.end('我才是首页...');
});

// 端口监听
app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
});