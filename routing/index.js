const router = require('express').Router()
const users = require('./users')
const auth = require('./auth')
const masterPelatihan = require('./masterPelatihan')
const poolPelatihan = require('./poolPelatihan')




router.use('/users',users)
router.use('/auth',auth)
router.use('/masterPelatihan',masterPelatihan)
router.use('/poolPelatihan',poolPelatihan)


module.exports=router