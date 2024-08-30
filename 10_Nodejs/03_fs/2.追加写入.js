
const fs =require('fs')

// 追加方法
// fs.appendFile('./座右铭.txt','\r\n择其善者而从之，其不善者而改之',err=>{
//     if(err){
//         console.log('追加失败');
//         return;
//     }
//     console.log('追加成功');
    
// });

// writeFile的写入方法
fs.writeFile('./座右铭.txt','\r\n我是新内容',{flag:'a'},err=>{
    // err写入失败：错误对象
    //    写入成功：null
    if(err){
        console.log('写入失败');
        return;
    }

    console.log('写入成功');  
})