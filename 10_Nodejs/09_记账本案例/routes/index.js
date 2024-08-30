var express = require('express');
var router = express.Router();

/* 记账本的主页跳转 */
router.get('/',(req, res, next)=>{
  res.render('index')
});
/* 记账本的列表 */
router.get('/account',(req, res, next)=>{
  res.render('list')
});

// 添加记录
router.get('/account/create',(req, res, next)=>{
  res.render('create')
});

module.exports = router;
