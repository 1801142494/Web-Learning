const express =require('express');

const app=express();

app.get('/server',(req,res)=>{
    // 设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    // 接收所有类型的头
    res.send('Hello Ajax');
})
app.post('/server',(req,res)=>{
    // 设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send('Hello Ajax Post');
})

app.all('/server',(req,res)=>{
    // 设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    // 接收所有类型的头
    res.setHeader('Access-Control-Allow-Headers','*');
    res.send('Hello Ajax Json');
})

app.all('/json-server',(req,res)=>{
    // 设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    // 接收所有类型的头
    const obj={
        name:'张三',
        age:18,
        sex:'男'
    }
    res.send(JSON.stringify(obj));
})

app.all('/timeout',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');

    setTimeout(()=>{
        res.send('延迟三秒响应');
    },3000)
})
app.all('*',(req,res)=>{
    res.send('404 Not Found');
})

app.listen(3000,()=>{
    console.log('服务启动了，正在检测3000端口...');
})