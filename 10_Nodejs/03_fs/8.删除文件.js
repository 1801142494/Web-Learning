const fs=require('fs');

// 方法一：调用unlink方法   同步：unlinkSync
// fs.unlink('./data.txt',err=>{
//     if(err){
//         console.log('失败');
//         return;
//     }
//     console.log('成功');
// })

// 方法二：调用rm方法   同步：rmSync
fs.unlink('./论语.txt',err=>{
    if(err){
        console.log('失败');
        return;
    }
    console.log('成功');
})