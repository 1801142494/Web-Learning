const http=require('http');

const server=http.createServer((request,response)=>{

    // 1.设置响应码
    response.statusCode=200;
    // 2.设置响应描述
    response.statusMessage='I Love You';
    //3.设置响应头
    response.setHeader('content-type','text/html;charset=utf-8');
    response.setHeader('Server','Node.js');
    response.setHeader('myHeader',"test test test");
    response.setHeader('test',['a','b','c']);

    // 4.响应体
    response.write('hello')
    response.write('hello')
    response.write('hello')
    // end是唯一的
    response.end();
})

server.listen(9000,()=>{
    console.log('服务启动了...');
})