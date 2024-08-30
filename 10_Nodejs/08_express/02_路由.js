const express =require('express');

const app=express();

app.get('/home',(req,res)=>{
    res.end('hello express');
})
app.get('/',(req,res)=>{
    res.end('home');
})
app.post('/login',(req,res)=>{
    res.end('login login');
})
// 接收所有这个路径的响应
app.all('/test',(req,res)=>{
    res.end('test test');
})
// 404响应
app.all('*',(req,res)=>{
    res.end('404 not found');
})

app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
})