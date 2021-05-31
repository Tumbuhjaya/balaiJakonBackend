const router = require('express').Router()
const users = require('./users')
const auth = require('./auth')
const masterPelatihan = require('./masterPelatihan')
const poolPelatihan = require('./poolPelatihan')
const document = require('./document')
const provinsi = require('./provinsi')
const excel = require('./excel')
const kabKota = require('./kabKota')
const usersDJBK = require('./usersDJBK')


router.use('/users',users)
router.use('/auth',auth)
router.use('/masterPelatihan',masterPelatihan)
router.use('/poolPelatihan',poolPelatihan)
router.use('/document',document)
router.use('/provinsi',provinsi)
router.use('/excel',excel)
router.use('/kabKota',kabKota)
router.use('/usersDJBK',usersDJBK)


module.exports=router