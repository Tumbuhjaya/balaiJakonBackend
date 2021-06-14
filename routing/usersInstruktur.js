const controller = require('../controller/usersInstrukturController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')
const upload = require('../helper/upload')

router.post('/register',controller.register)
router.post('/update',authentification,controller.update)
router.get('/profile',authentification,controller.profile)
router.post('/uploadKTP',upload,authentification,controller.uploadKTP)
router.get('/allByRole/:role',authentification,controller.allByRole)


module.exports=router