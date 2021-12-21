const { Router } = require('express');
const router = Router()

router.use('/admin', require('./admin'));
router.use('/', (req, res) => {

    res.render('admin/index.html');

});

module.exports = router;