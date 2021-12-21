const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    res.send('1234')

})

router.get('/java', (req, res) => {

    res.send('5678')

})

router.get('/algo', (req, res) => {

    res.send('9999')

})

router.get('/db', (req, res) => {

    res.send('1010')

})

router.get('/view', (req, res) => {

    res.render('soft/main.html', {

        message : 'hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo'

    })

})

router.get('/yydh', (req, res) => {

    res.render('soft/test.html', {

        name : '홍길동',
        school : '양영디지털고등',
        ghwa : '소프트과'

    })

})


router.get('/other', (req, res) => {

    res.render('soft/test.html', {

        name : '김미미',
        school : '양영중',
        ghwa : '2반'

    })

})

module.exports = router
