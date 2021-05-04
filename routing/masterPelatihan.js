const controller = require('../controller/masterPelatihanController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')


router.post('/register',authentification,controller.register)
router.post('/update/:id',authentification,controller.update)
router.post('/changeStatus/:id',authentification,controller.changeStatus)
router.get('/list',authentification,controller.list)
router.get('/list/:id',authentification,controller.listById)
router.post('/delete/:id',authentification,controller.delete)
router.get('/listPelatihan01',authentification,controller.listPelatihan01)
router.get('/listPelatihan23',authentification,controller.listPelatihan23)
router.get('/listPelatihan4',authentification,controller.listPelatihan4)
router.get('/listByUserId/:userId',authentification,controller.listByUserId)


module.exports=router