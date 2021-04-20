const controller = require('../controller/masterPelatihanController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')


router.post('/register',authentification,controller.register)
router.post('/update/:id',authentification,controller.update)
router.post('/changeStatus',authentification,controller.changeStatus)
router.get('/list',authentification,controller.list)
router.get('/list/:id',authentification,controller.listById)
router.post('/delete/:id',authentification,controller.delete)


module.exports=router