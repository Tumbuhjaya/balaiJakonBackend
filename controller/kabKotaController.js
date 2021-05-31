const kabKota = require('../model/kabKotaModel')

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


    static findByProvinsi(req,res){
        const {provinsiId}=req.params
        kabKota.findAll({
            where:{
                provinsiId:provinsiId
            }
        })
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}

module.exports=Controller
