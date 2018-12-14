const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    // res.render('index', { title: '<h1>Express</h1>'
    //                         ,users:[{username: 'Wilson'},
    //                               {username: 'Wilson Zhong'},
    //                               {username: 'Zhong Wei'}] 
    //           });
    res.send('hello express')
  });

module.exports = router
