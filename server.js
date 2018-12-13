const express = require('express')
const bodyParser = require('body-parser')

// import express from 'express'
// import bodyParser from 'body-parser'
const app = express()

// create application/json parser
// var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

/** parse application/x-www-form-urlencoded */
// app.use(bodyParser.urlencoded({ extended: false }))
/** parse application/json  */
// app.use(bodyParser.json())

//express.static 提供静态文件，就是html和css js文件
app.use(express.static('public'))

// app.disable('view cache')

// 电话号码返回省和市，为了模拟延迟，使用了setTimeout
app.get('/',(res)=>{
    setTimeout(()=>{
        res.setHeader('Access-Control-Allow-Origin', '*')
      res.json({
         success: true,
              obj: {
                  province: '广东',
                  city: '深圳'
              }
      })
    },1000)
  })
app.post('/phoneLocation',(req,res)=>{
    setTimeout(()=>{
      res.json({
         success: true,
              obj: {
                  province: '广东',
                  city: '深圳'
              }
      })
    },1000)
  })
  
  // 返回面值列表
  app.post('/faceList', (req, res) => {
      setTimeout(() => {
          res.json(
              {
                  success: true,
                  obj:['20元', '30元', '50元', '100元']
              }
              
          )
      }, 1000);
  })
  
app.listen(8001, ()=>{
    console.log('server start')
})
