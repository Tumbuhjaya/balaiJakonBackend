const organisasiPUPR =require('../model/organisasiPUPRModel')

class Controller{

    static all(req,res){
        organisasiPUPR.findAll()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static register(req,res){
        const{namaorganisasiPUPR}= req.body
        organisasiPUPR.create({namaorganisasiPUPR:namaorganisasiPUPR},{returning:true})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json({message:err})
        })
    }

   
}

module.exports=Controller