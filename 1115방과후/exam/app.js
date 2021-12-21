const express = require('express')
const soft = require('./router/soft')
const nunjucks = require('nunjucks')
const app = express()
const port = 3000

nunjucks.configure('template' , {

    autoescape : true,
    express : app
    
})

app.listen(port, () => {

    console.log('Server ON!!')

})

app.get('/', (req, res) => {

    res.send('hello')

})

app.use('/soft', soft)

