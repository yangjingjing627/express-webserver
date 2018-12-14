// 报错，因为没有安装ejs模板
const express = require('express')
const path = require('path')
const app = express()

let indexRouter = require('./routes/index')
let userRouter = require('./routes/user')
// console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
// app.set('views', path.join(__dirname, 'views'))
// app.set('views engine', 'ejs')

app.use('/', indexRouter)
app.use('/user', userRouter)

// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

app.listen(8004, ()=>{
    console.log('server started on port 8004')
})
