function tiemo(){
    console.log('贴膜中...');
}
function neijiao(){
    console.log('捏脚中...');
}

// 暴露数据方法一
// module.exports={
//     tiemo,
//     neijiao
// };

// 方法二
exports.tiemo =tiemo;
exports.neijiao =neijiao;