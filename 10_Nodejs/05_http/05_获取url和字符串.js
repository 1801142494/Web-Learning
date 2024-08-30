// 导入http模块
const http = require('http');

// 1.导入url模板
const url=require('url');

// 创建服务对象
const server =http.createServer((request,response)=>{
    //2.解析 request.url
    let res =url.parse(request.url,true)
    // console.log(res);

    // 路径
    let pathname=res.pathname;
    // console.log(pathname);
    
    // 字符串
    let keyword =res.query.keyword;
    console.log(keyword);

    response.end('url')
});

//监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已经启动了...');
})
