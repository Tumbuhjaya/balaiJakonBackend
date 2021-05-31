const controller = require('../controller/usersDJBKController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')


router.post('/register',controller.register)


module.exports=router