
const fs=require('fs');

// 创建读取流
const rs=fs.createReadStream('./resource/ys.mp4');
// 绑定data事件
rs.on('data', chunk=>{
    console.log(chunk.length);
})

// 读取完后触发
rs.on('end',()=>{
    console.log('读取结束了');
})