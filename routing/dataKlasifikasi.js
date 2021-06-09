const controller = require('../controller/dataKlasifikasiController')
const router = require('express').Router()
const authentification=require('../middleware/authentification')

router.get('/all',authentification,controller.list)
router.get('/listKlasifikasi/:jenjang',authentification,controller.listKlasifikasi)
router.get('/lisSubklasifikasi/:jenjang/:klasifikasi',authentification,controller.listSubKlasifikasi)
module.exports = router