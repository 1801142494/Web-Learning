// 1.导入express
const express =require('express');

// 2.创建应用对象
const app=express();

// 3.创建路由
app.get('/home',(req,res)=>{
    res.end('hello express');
});

// 4.端口监听
app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
});