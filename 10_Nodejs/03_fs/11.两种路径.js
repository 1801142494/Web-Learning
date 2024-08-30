const fs=require('fs');

// 相对路径
// let data=fs.readFileSync('./观书有感.txt');
// console.log(data.toString());

// 绝对路径
let data=fs.readFileSync('C:\\Users\\lenovo\\Desktop\\代码\\9_Nodejs\\03_fs/观书有感.txt');
console.log(data.toString());