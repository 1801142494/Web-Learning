var express = require('express');
var router = express.Router();

// 导入
const {formidable} =require('formidable')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页的表单
router.get('/portrait', (req, res) =>{
  res.render('portrait');
});

// 处理文件上传
router.post('/portrait', (req, res,next) =>{
  
  // 创建表单对象
  const form = formidable({
    multiples:true,
    // 设置上传文件的保存目录
    uploadDir:__dirname+'/../public/images',
    // 保持文件后缀
    keepExtensions:true
  });
  // 获取请求报文，结果放到fields，files
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields);//存一般数据
    // console.log(files);//存文件
    let url='/images'+files.portrait[0].newFilename
    res.send(url);
  });
});

module.exports = router;
