const dataKlasifikasi = require('../model/dataKlasifikasiModel')

class Controller{


    static list(req,res){
        dataKlasifikasi.findAll({})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static listKlasifikasi(req,res){
        const{jenjang}= req.body

        dataKlasifikasi.findAll({where:{
            jenjang:jenjang
        }})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static listSubKlasifikasi(req,res){
        const {jenjang,klasifikasi}= req.body
        dataKlasifikasi.findAll({where:{
            jenjang:jenjang,
            klasifikasi:klasifikasi
        }})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}

module.exports=Controller