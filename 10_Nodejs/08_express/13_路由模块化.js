// 导入express
const express =require('express');

// 导入模块路由
const homeRoutes =require('./routes/homeRoutes.js');
const adminRoutes =require('./routes/adminRoutes.js');
// 创建应用对象
const app=express();

// 路由
app.use(homeRoutes);
app.use(adminRoutes);

app.all('*',(req,res)=>{
    res.send('404 not fond');
})
// 监听端口
app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
})