// 导入http模块
const http = require('http');



// 创建服务对象
const server =http.createServer((request,response)=>{
 
    // 实例化URL对象
    // const url =new URL('/search?keyword=h5','http://127.0.0.1:9000')
    const url =new URL(request.url,'http://127.0.0.1:9000')

    // 查询路径
    const pathname =url.pathname;
    console.log(pathname);
    
    // 查询字符串
    const keyword =url.searchParams.get('keyword')
    console.log(keyword);

    response.end('url')
});

//监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已经启动了...');
})
