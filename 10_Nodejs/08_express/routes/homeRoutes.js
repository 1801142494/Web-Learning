//导入express
const express=require('express');

// 创建路由对象
const router=express.Router();

// 前台路由规则
router.get('/admin',(req,res)=>{
    res.send('后台页面');
})
router.get('/setting',(req,res)=>{
    res.send('设置页面');
})

// 暴露
module.exports =router;