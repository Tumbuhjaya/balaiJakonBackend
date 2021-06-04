const controller = require('../controller/pengalamanKerjaController')
const upload = require('../helper/upload')
const router = require('express').Router()
const authentification=require('../middleware/authentification')

router.post('/register',authentification,upload,controller.register)
router.post('/update',authentification,controller.update)
router.get('/listByUsers',authentification,controller.listByUser)
router.post('/editFile',authentification,upload,controller.editFile)

module.exports=router