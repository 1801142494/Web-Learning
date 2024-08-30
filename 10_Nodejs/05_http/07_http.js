// 1.导入http模块
const http = require('http');

// 2.创建服务对象
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')

    const { method } = request
    const { pathname } = new URL(request.url, 'http://127.0.0.1:9000/')

    if (method === "GET" && pathname === '/login') {
        response.end('登陆页面');
        return;
    }else if (method === "GET" && pathname === '/reg') {
        response.end('注册页面');
        return;
    }else{
        response.end('404 Not Found')
    }

})

// 3.监视
server.listen(9000, () => {
    console.log('服务已经启动了...');
})