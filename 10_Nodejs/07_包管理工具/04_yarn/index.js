// 1.导入http模块
const http = require('http');

// 2.创建服务对象
const server = http.createServer((request, response) => {

    response.setHeader('content-type', 'text/html;charset=utf-8')


    response.end('Hello World!你好')
})

// 3.监视
server.listen(9000, () => {
    console.log('服务已经启动了...');
})