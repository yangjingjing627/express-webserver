const fs = require('fs')
const express = require('express')
const app = express()

fs.writeFile('public/11.txt', '失焦时时代进步',{flag:"a"}, function(err) {
    if(err) {
        return console.log('err', err)
    }else {
        console.log('写入成功')
    }
})

app.listen(8003, ()=>{
    console.log('server start')
})