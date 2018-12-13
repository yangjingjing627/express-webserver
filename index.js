const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/** parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }))
/** parse application/json  */
app.use(bodyParser.json())

//express.static 提供静态文件，就是html和css js文件
app.use(express.static('public'))

// app.disable('view cache')

// 模拟post请求，为了模拟延迟，使用了setTimeout
app.post('/user',(req,res)=>{
    setTimeout(()=>{
      res.json({
         success: true,
              obj: {
                  name: '康熙',
                  height: '175cm',
                  id: Date.now()
              }
      })
    },1000)
  })
  
app.listen(8002, ()=>{
    console.log('server start')
})
