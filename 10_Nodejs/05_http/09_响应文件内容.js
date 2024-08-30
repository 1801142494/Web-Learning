const http=require('http');

// 通过fs读取html文件，交给响应返回
const fs=require('fs');
const server=http.createServer((request,response)=>{

    const html=fs.readFileSync('./02_form.html')
    
    // 可以直接读buffer
    response.write(html);
    response.end();
})

server.listen(9000,()=>{
    console.log('服务启动了');
})