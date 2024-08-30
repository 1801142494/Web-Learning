const http = require('http');
// 通过fs读取html文件，交给响应返回
const fs = require('fs');

const server = http.createServer((request, response) => {
    const { pathname } = new URL(request.url, 'http://127.0.0.1:9000/');
    // 声明一个变量
    let root = __dirname + '/page';
    let filePath = root + pathname;
    
    fs.readFile(filePath, (err, data) => {
        console.log(filePath);
        
        if (err) {
            response.setHeader('content-type', 'text/html;charset=utf-8');
            response.statusCode = 500;
            response.end('文件读取失败');
            return;
        }
        response.end(data);
    })
})


server.listen(9000, () => {
    console.log('服务启动了');
})