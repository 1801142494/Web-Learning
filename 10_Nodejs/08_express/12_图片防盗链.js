const express =require('express');
const app=express();

// 通过全局中间件设置防盗链
app.use((req,res,next)=>{
    // referer存着访问网站的地址，有可能为空
    let referer=req.get('referer');
    if(referer){
        // 实例化URL对象，解析地址
        let url=new URL(referer)
        let hostname=url.hostname
        
        // 判断不是127.0.0.1发送的请求就发送404
        if(hostname !=='127.0.0.1'){
            res.status(404).send('not found');
            return;
        }
    }
    next();
});
// 创建静态资源中间件
app.use(express.static(__dirname+'/public'))

app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
});