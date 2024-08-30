const fs =require('fs');

// 导入path模块
const path =require('path');

// resolve方法，拼接规范的绝对路径
//              一般第一个是绝对路径，后面的都是相对路径
// console.log(path.resolve(__dirname,'./index.html'));
console.log(path.resolve(__dirname,'index.html'));

// 注意：前面带斜杠会识别成绝对路径，路径会从最后一个绝对路径开始计算
// console.log(path.resolve(__dirname,'/index.html'));

