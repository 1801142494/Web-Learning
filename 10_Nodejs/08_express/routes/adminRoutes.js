//导入express
const express=require('express');

// 创建路由对象
const router=express.Router();

// 后台路由规则
router.get('/home',(req,res)=>{
    res.send('页面主页');
})
router.get('/search',(req,res)=>{
    res.send('搜索主页');
})

// 暴露
module.exports =router;