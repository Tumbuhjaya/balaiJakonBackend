const dataKlasifikasi = require('../model/dataKlasifikasiModel')
const sq = require('../config/connection')

class Controller{

    static list(req,res){
    let data = sq.query(`select distinct jenjang from "dataKlasifikasis" dk`)
    res.json(data[0])
    }

    static listKlasifikasi(req,res){
        const{jenjang}= req.params
        let data=sq.query(`select distinct klasifikasi from "dataKlasifikasis" dk where jenjang = '${jenjang}'`)
        res.json(data[0])
    }

    static listSubKlasifikasi(req,res){
        const {jenjang,klasifikasi}= req.params
     let data = sq.query(`select "subKlasifikasi" ,"kodeSubKlaisifikasi" from "dataKlasifikasis" dk where jenjang = '${jenjang}' and klasifikasi ='${klasifikasi}'`)
        res.json(data[0])
    }
}

module.exports=Controller