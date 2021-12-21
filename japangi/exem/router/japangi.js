const express = require('express')
const router = express.Router()

router.get('/index',(req, res) =>{

    res.render('japangi/index.html')

})

router.post('/order.html',(req, res) =>{

    res.render('japangi/order.html')

})


module.exports = router