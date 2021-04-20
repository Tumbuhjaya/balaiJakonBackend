const router = require('express').Router()
const users = require('./users')
const auth = require('./auth')
const masterPelatihan = require('./masterPelatihan')



router.use('/users',users)
router.use('/auth',auth)
router.use('/masterPelatihan',masterPelatihan)


module.exports=router