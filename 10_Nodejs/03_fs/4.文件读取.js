
const fs =require('fs');

// 异步读取
// fs.readFile('./观书有感.txt',(err,data)=>{
//     if(err){
//         console.log('读取失败');
//         return;
//     }
//     // data是buffer形式的
//     console.log(data.toString())
// })

// 同步读取
const data=fs.readFileSync('./观书有感.txt')

console.log(data.toString())