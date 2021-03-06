const controller = require('../controller/usersController')
const upload = require('../helper/upload')
const router = require('express').Router()
const authentification=require('../middleware/authentification')


router.post('/register',controller.register)
router.post('/changePP',authentification,upload,controller.changePP)
router.post('/login',controller.login)
router.post('/approval/:id',authentification,controller.approval)
router.get('/list',authentification,controller.list)
router.post('/delete/:id',authentification,controller.delete)
router.get('/details/:id',authentification,controller.details)
router.post('/registerToPelatihan',authentification,controller.registerToPelatihan)
router.get('/listPeserta',authentification,controller.listPeserta)
router.get('/listPesertaByRole/:role',authentification,controller.listPesertaByRole)
router.get('/listPesertaPelatihan/:masterPelatihanId',authentification,controller.listPesertaPelatihan)
router.post('/importExcel',controller.insertExcel)
router.get('/showPP',authentification,controller.showPP)
router.get('/profileByAdmin/:id',controller.profileByAdmin)

module.exports=router