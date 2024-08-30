const { log } = require('console');
const fs=require('fs');

// 相对路径的参照物：命令行的工作目录
// fs.writeFileSync('./love.txt','test');

// 解决方法
// 全局变量 __dirname 保存当前文件所在目录的绝对路径
// 所以为了保证路径不出错，要在路径前加上
console.log(__dirname);
fs.writeFileSync(__dirname+'/love.txt','test');
