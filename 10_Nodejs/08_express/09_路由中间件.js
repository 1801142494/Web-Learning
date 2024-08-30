// 导入express
const express =require('express');
// 创建应用对象
const app=express();

// 路由中间件
function checkCodeMidlleware(req,res,next){
    if(req.query.code==521){
    next();
    }else{
        res.send('暗号错误')
    }
}
// 创建路由
app.get('/home', checkCodeMidlleware,(req,res)=>{
    res.send('页面主页');
})
app.get('/admin',checkCodeMidlleware,(req,res)=>{
    res.send('后台页面');
})
app.get('/setting',(req,res)=>{
    res.send('设置页面');
})
app.all('*',(req,res)=>{
    res.send('404 not fond');
})
// 监听端口
app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
})