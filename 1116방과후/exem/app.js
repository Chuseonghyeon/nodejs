const express = require('express')
const board = require('./router/board')
const nunjucks = require('nunjucks')
const app = express()
const port = 3000

nunjucks.configure('template', {

    autoescape : true,
    express : app

})

app.listen(port, () => {

    console.log('Server ON!!')

})

app.get('/', (req, res) => {

    res.send('hello')

})

app.use('/board', board)