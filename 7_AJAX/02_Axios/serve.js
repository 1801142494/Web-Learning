const express =require('express');

const app=express();

app.all('/axios-server',(req,res)=>{
    // 设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
     // 接收所有类型的头
    res.setHeader('Access-Control-Allow-Headers','*');
    res.send('Hello axios');
})


app.listen(3000,()=>{
    console.log('服务启动了，正在检测3000端口...');
})