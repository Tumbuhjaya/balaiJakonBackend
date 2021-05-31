const controller = require('../controller/kabKotaController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')

router.get('/all',authentification,controller.all)
router.get('/findByProvinsi/:provinsiId',authentification,controller.findByProvinsi)

module.exports=router