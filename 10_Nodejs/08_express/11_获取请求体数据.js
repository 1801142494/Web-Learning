const express = require('express');
// 导入body-parser中间件
const bodyParser = require('body-parser');

// 解析json形式的请求体
var jsonParser = bodyParser.json()

// 解析queryString形式的请求体
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();

app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/11_form.html');
})
app.post('/login', urlencodedParser, (req, res) => {
    res.send(req.body);
})
app.all('*', (req, res) => {
    res.send('404 not hound')
})

app.listen(3000, () => {
    console.log('服务已经启动，端口3000正在监听...');
})