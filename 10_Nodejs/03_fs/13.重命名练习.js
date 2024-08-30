const fs = require('fs');

// 返回了一个数组
const files = fs.readdirSync('./code');

// 遍历
files.forEach(item => {
    const data = item.split('.')
    let [num,name,js]=data
    if(+num<10){
        num='0'+num
    }
    
    // 新文件名 
    let newName =num+'.'+name+'.'+js;
    fs.renameSync(`./code/${item}`,`./code/${newName}`);
})
