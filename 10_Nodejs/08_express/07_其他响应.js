// 导入express
const express =require('express');

// 创建应用对象
const app=express();

// 创建路由
app.get('/other',(req,res)=>{
    // 跳转响应
    // res.redirect('https://www.baidu.com/');
    // 下载响应
    // res.download(__dirname+'/singers.json');
    // json响应
    // res.json({
    //     "singer_name": "周杰伦",
    //     "singer_pic": "http://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.webp",
    // })
    // 文件响应
    res.sendFile(__dirname+'/02_form.html')
});

// 端口监听
app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
});