// 导入express
const express =require('express');

const fs=require("fs");
const path =require("path")
// 创建应用对象
const app=express();

// 创建全局中间件函数
function recordMiddleware(req,res,next){
    // 解构数组
    let {ip,url} =req;
    // 写入本地文件
    fs.appendFileSync(path.resolve(__dirname,"./access.log"),`${url} ${ip}\r\n`) 
    next();
}
app.use(recordMiddleware);
// 创建路由
app.get('/home',(req,res)=>{
    res.send('页面主页');
})
app.get('/admin',(req,res)=>{
    res.send('后台页面');
})
app.all('*',(req,res)=>{
    res.send('404 not fond');
})
// 监听端口
app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
})