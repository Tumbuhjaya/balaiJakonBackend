const controller = require('../controller/DJBKController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')

router.get('/all',authentification,controller.all)
router.post('/register',authentification,controller.register)

module.exports = router