const express = require('express')
const write = require('./router/write')
const nunjucks = require('nunjucks')
const { json } = require('express')
const router = require('./router/write')
const { post } = require('./router/write')
const app = express()
const port = 3000

nunjucks.configure('template' , {

    autoescape : true,
    express : app

})

app.listen(port, () => {

    console.log('Server ON!!')

})

router.post('/write', (req, res) => {

    res.send(res.body)

})

app.use('/write', write)

app.use(express,json())

app.use(express.urlencoded({extende: false}))

function testMiddleware(req, res, next){

    console.log('첫번째 미들웨어실행!')
    next()

}

function testMiddlewareTow(req, res, next){

    console.log('두번째 미들웨어실행!')
    next()

}

app.get('/', testMiddleware, testMiddlewareTow,(req, res) => {

    res.send('기본 홈입니다')

})

