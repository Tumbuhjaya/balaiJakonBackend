const controller = require('../controller/PJMController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')

router.get('/all',authentification,controller.list)
router.post('/register',authentification,controller.register)
router.get('/listByNama/:namaPJM',authentification,controller.listByNama)
router.post('/delete/:id',authentification,controller.delete)
router.post('/update/:id',authentification,controller.update)
router.post('/listByJenisPJM/:namaPJM',authentification,controller.listByJenisPJM)

module.exports = router