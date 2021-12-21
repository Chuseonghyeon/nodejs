const express = require('express')
const nunjucks = require('nunjucks')
const japangi = require('./router/japangi')
const app = express()
const port = 3000

app.use(express.json())  // 바디파서를 json형식으로 사용
app.use(express.urlencoded({ extended: false }))  // query-string 모듈을 사용하도록 옵션
app.use('/japangi', japangi)

app.listen(port, () =>{

    console.log('Server ON!')

})

nunjucks.configure('template', {

    autoescape : true,
    express : app

})