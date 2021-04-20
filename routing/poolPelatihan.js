const controller = require('../controller/poolPelatihanController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')


router.post('/register',authentification,controller.register)
router.post('/update',authentification,controller.update)
router.get('/listByUser/:userId',authentification,controller.listByUser)
router.post('/delete:id',authentification,controller.delete)




module.exports=router