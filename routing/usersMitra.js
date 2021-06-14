const controller = require('../controller/usersMitraController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')


router.post('/register',controller.register)
router.post('/update',authentification,controller.update)
router.get('/profile',authentification,controller.profile)
router.get('/all',authentification,controller.all)


module.exports=router