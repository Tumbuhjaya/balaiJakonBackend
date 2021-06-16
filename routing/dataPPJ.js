const controller = require('../controller/dataPPJController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')

router.get('/all',authentification,controller.list)
router.post('/register',authentification,controller.register)
router.post('/delete/:id',authentification,controller.delete)
router.post('/update/:id',authentification,controller.update)

module.exports = router