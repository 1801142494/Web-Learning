const express =require('express');

const app=express();

app.get('/:id.html',(req,res)=>{
    // 动态获取路由参数
    console.log(req.params.id);
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('商品列表');
});

app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
});