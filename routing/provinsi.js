const controller = require('../controller/provinsiController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')

router.get('/all',authentification,controller.all)

module.exports=router