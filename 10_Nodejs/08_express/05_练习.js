const express =require('express');

// 导入资源
const {singers} =require('./singers.json')
const app=express();

app.get('/singer/:id.html',(req,res)=>{
   
    let id = req.params.id
    const singer =singers.find(item=>{
        return item.id === +id
    })
    
    console.log(singer);
    
    if(!singer){
        res.statusCode=404;
        res.end(`<h1>404 Not Found</h1>`)
        return;
    }
    res.end(`
         <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>歌手详情</title>
        </head>
        <body>
            <h2>${singer.singer_name}</h2>
            <img src="${singer.singer_pic}" alt="${singer.singer_name}">
        </body>
        </html>   
    `);
})

app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听...');
});
