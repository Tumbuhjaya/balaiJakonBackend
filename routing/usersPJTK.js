const controller = require('../controller/usersPJTKController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')
const upload = require('../helper/upload')

router.post('/register',controller.register)
router.post('/update',authentification,controller.update)
router.get('/profile',authentification,controller.profile)
router.post('/uploadKTP',authentification,upload,controller.uploadKTP)

module.exports=router