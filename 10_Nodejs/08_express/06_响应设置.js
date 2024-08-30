const express =require('express');

const app=express();

app.get('/',(req,res)=>{
    // 原生响应
    // res.statusCode=404;
    // res.statusMessage='Hello!!!'
    // res.setHeader('xxx','yyy') 
    // res.write('你好')
    // res.end('hello express');

    // express响应
    res.status(500);
    res.set("aaa","bbb");
    res.send('你好 express');
});

app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
});