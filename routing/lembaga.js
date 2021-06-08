const controller = require('../controller/lembagaController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')

router.get('/all',authentification,controller.list)
router.post('/register',authentification,controller.register)
router.get('/listById/:id',authentification,controller.listById)
router.post('/delete/:id',authentification,controller.delete)
router.post('/update/:id',authentification,controller.update)

module.exports = router