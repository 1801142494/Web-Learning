const fs = require('fs');

// 1.同步读取
// const data=fs.readFileSync('./resource/ys.mp4');
// 2.同步写入
// fs.writeFileSync('./resource/ys副本.mp4',data)

// 2.通过流复制
// 创建读取流对象
let rs=fs.createReadStream('./resource/ys.mp4')
// 创建写入流对象
let ws=fs.createWriteStream('./resource/ys副本2.mp4')
// 绑定data事件
rs.on('data',chunk=>{
    ws.write(chunk);
})
rs.on('end',()=>{
    ws.end()
    console.log('复制完成');
})