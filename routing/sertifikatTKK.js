const controller = require('../controller/sertifikatTKKController')
const upload = require('../helper/upload')
const router = require('express').Router()
const authentification=require('../middleware/authentification')

router.post('/register',authentification,upload,controller.register)
router.post('/verifikasi',authentification,controller.verifikasi)
router.post('/update',authentification,controller.update)
router.get('/listByUsers',authentification,controller.listByUser)
router.get('/unverified',authentification,controller.listunverified)
router.post('/editFile',authentification,upload,controller.editFile)
router.post('/delete',authentification,controller.delete)

module.exports=router