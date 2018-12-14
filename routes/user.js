const express = require('express')
const router = express.Router()

router.get('/user', function (req, res) {
    // res.render('user', { title: '<h1>User</h1>'
    //                         ,users:[{username: 'Wilson'},
    //                               {username: 'Wilson Zhong'},
    //                               {username: 'Zhong Wei'}] 
    //           });
    router.get('/user/:name', function (req, res) {
        res.send('hello, ' + req.params.name)
    })
});

module.exports = router