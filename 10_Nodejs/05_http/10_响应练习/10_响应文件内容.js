const http=require('http');

// 通过fs读取html文件，交给响应返回
const fs=require('fs');
const server=http.createServer((request,response)=>{

    const {pathname}=new URL(request.url,'http://127.0.0.1:9000/')

    if(pathname==='/'){
        const html=fs.readFileSync('./index.html');
        response.end(html);
    }else if(pathname==='/index.css'){
        const css=fs.readFileSync('./index.css');
        response.end(css);
    }else if(pathname==='/index.js'){
        const js=fs.readFileSync('./index.js');
        response.end(js);
    }else{
        response.statusCode =404;
        response.end('404 Not Found');
    }
})

server.listen(9000,()=>{
    console.log('服务启动了');
})