const router = require('express').Router()

router.use('/events', require('./events'))
router.use('/users', require('./users'))

module.exports = router