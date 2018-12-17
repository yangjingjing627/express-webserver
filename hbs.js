const express = require('express')
const app = express()
// 加载hbs模块
const hbs = require('hbs')

// 
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 加载数据模块
var blogEngine = require('./blog')

// 指定模板文件的后缀名为html
app.set('view engine', 'html')

// 运行hbs模块
app.engine('html', hbs.__express)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.bodyParser())

 
app.get('/', function(req, res) {
    res.render('home',{title:"最近文章", entries:blogEngine.getBlogEntries()});
 });
  
 app.get('/about', function(req, res) {
    res.render('about', {title:"自我介绍"});
 });
  
 app.get('/article/:id', function(req, res) {
    var entry = blogEngine.getBlogEntry(req.params.id);
    res.render('article',{title:entry.title, blog:entry});
 })

app.listen(8005, ()=>{
    console.log('The server started on port 8005')
})

