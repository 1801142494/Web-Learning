// 1.导入http模块
const http = require('http');

// 2.创建服务对象
const server =http.createServer((request,response)=>{
   
    // 1.创建一个空字符串
    let body ='';
    // 2.绑定data事件，进行读取
    request.on('data',chunk=>{
        body+=chunk;
    })
    // 2.绑定end事件，进行读取
    request.on('end',()=>{
        console.log(body);

         // 响应
        response.end('Hello Http Server');
    })
   
});

// 3.监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已经启动了...');
})
