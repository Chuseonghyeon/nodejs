const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    res.render('board/write.html', {

    })

})



module.exports = router