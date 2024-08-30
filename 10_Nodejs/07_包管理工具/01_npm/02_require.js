// 1.导入 uniq包
// 导入的其实是node_modules文件下uniq的uniq.js里的函数

const uniq=require('uniq');
// const uniq=require('./node_modules/uniq');
// const uniq=require('./node_modules/uniq/uniq.js');

// 使用函数
const arr=[1,2,3,4,5,4,3,2,1];

const result =uniq(arr)
console.log(result);

