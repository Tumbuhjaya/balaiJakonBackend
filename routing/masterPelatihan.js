const controller = require('../controller/masterPelatihanController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')


router.post('/register',controller.register)



module.exports=router