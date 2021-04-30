const controller = require('../controller/usersController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')


router.post('/register',controller.register)
router.post('/login',controller.login)
router.post('/approval/:id',authentification,controller.approval)
router.get('/list',authentification,controller.list)
router.post('/delete/:id',authentification,controller.delete)
router.get('/details/:id',authentification,controller.details)


module.exports=router