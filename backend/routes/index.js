const router = require('express').Router();
require('../database/mongoConnection');


const portfolio = require('./portfolio')

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: 'This page not existis!'
    })
})


router.use('/portfolio', portfolio)


module.exports = router