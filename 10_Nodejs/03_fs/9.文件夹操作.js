// 1.导入fs模块
const fs=require('fs')

// 2.创建文件夹  mk make  dir directory
// fs.mkdir('./html',err=>{
//     if(err){
//         console.log('失败');
//         return;
//     }
//     console.log('成功');
// })

// 2.2递归创建
// fs.mkdir('./a/b/c',{recursive:true},err=>{
//     if(err){
//         console.log('失败');
//         return;
//     }
//     console.log('成功');
// })

// 3.查看文件夹
// fs.readdir('./resource',(err,data)=>{
//     if(err){
//         console.log('失败');
//         return;
//     }
//     console.log(data);
// })

// 4.移除文件夹
// fs.rmdir('./html',err=>{
//     if(err){
//         console.log('失败');
//         return;
//     }
//     console.log('成功'); 
// })

// 4.2递归移除文件夹
fs.rm('./a',{recursive:true},err=>{
    if(err){
        console.log('失败');
        return;
    }
    console.log('成功'); 
})