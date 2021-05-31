const controller= require('../controller/excelController')
const router = require('express').Router()

router.post('/insertProvinsi',controller.insertProvinsi)
router.post('/insertKabKota',controller.insertKabKota)
router.post('/insertDJBK',controller.insertDJBK)

module.exports=router