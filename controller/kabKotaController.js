const kabKota = require('../model/kabKotaModel')
const sq = require('../config/connection')
class Controller{

    static all(req,res){
        kabKota.findAll()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json({message:err})
        })
    }


    static async findByProvinsi(req,res){
        const {namaProvinsi}=req.params
        let data = await sq.query(`select * from "kabKota" kk join provinsis p ON kk."provinsiId" =p.id where p."namaProvinsi" ='${namaProvinsi}'`)
        res.json(data[0])
    }
        
}

module.exports=Controller
