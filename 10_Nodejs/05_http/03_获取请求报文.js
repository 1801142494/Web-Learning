// 1.导入http模块
const http = require('http');

// 2.创建服务对象
const server =http.createServer((request,response)=>{
    // 获取请求行 的方法
    // console.log(request.method);
    // 获取请求行 的url
    // console.log(request.url);
    // 获取请求行的 版本号
    // console.log(request.httpVersion);

    // 获取请求头
    console.log(request.headers);

    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('Hello Http Server，你好');
});

// 3.监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已经启动了...');
})
