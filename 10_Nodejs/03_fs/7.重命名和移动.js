const fs =require('fs');

// fs.rename('./座右铭.txt','./论语.txt',err=>{
//     if(err){
//         console.log('重命名失败');
//         return;
//     }
//     console.log('重命名成功');
// })

fs.rename('./论语.txt','./resource/论语.txt',err=>{
    if(err){
        console.log('失败');
        return;
    }
    console.log('成功');
})