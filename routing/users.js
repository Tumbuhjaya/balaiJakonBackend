const controller = require('../controller/usersController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')


router.post('/register',controller.register)
router.post('/login',controller.login)
router.post('/approval/:id',authentification,controller.approval)


module.exports=router