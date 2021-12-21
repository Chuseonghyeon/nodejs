const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    res.send('1234')

})

router.get('/free', (req, res) => {

    res.render('board/basic.html', {

        name : '이순신',
        board : '자유'

    })

})

router.get('/notice', (req, res) => {

    res.render('board/basic.html', {

        name : '신사임당',
        board : '여성가족부'

    })

})

router.get('/etc', (req, res) => {

    res.render('board/products.html', {

        

    })

})

module.exports = router