const fs=require('fs');

fs.stat('./resource',(err,data)=>{
    if(err){
        console.log('操作失败');
        return;
    }
    console.log(data); 
    console.log(data.isFile()); 
    console.log(data.isDirectory()); 
})