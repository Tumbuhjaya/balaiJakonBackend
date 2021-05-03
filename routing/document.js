const controller = require('../controller/documentController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')
const upload = require('../helper/upload')


router.post('/register',authentification,upload,controller.register)

module.exports=router