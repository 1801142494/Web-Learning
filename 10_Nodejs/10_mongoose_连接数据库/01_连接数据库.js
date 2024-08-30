// 1.安装 mongoose
// 2.导入
const mongoose =require('mongoose');

// 3.连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 4.设置回调
mongoose.connection.once('open',()=>{
    console.log('连接成功');
})
mongoose.connection.once('error',()=>{
    console.log('连接失败');
})
mongoose.connection.once('close',()=>{
    console.log('连接关闭');
})

// 关闭
// setTimeout(()=>{
//     mongoose.disconnect();
// },2000)