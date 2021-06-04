const organisasiKL =require('../model/organisasiKLModel')

class Controller{

    static all(req,res){
        organisasiKL.findAll()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static register(req,res){
        const{namaOrganisasiKL}= req.body
        organisasiKL.create({namaOrganisasiKL:namaOrganisasiKL},{returning:true})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json({message:err})
        })
    }

   
}

module.exports=Controller