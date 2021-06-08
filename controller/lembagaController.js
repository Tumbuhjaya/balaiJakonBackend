const lembaga = require('../model/lembagaModel')

class Controller{

    static register(req,res){
        const{jenisLembaga,namaLembaga,provinsiLembaga,kabKotaLembaga,uraianAlamatLembaga} = req.body
        lembaga.findAll({where:{
            namaLembaga:namaLembaga
        }})
        .then(hasil=>{
            if(hasil){
                res.json({message:"lembaga sudah terdaftar"})
            }
            else{
                lembaga.create({jenisLembaga,namaLembaga,provinsiLembaga,kabKotaLembaga,uraianAlamatLembaga},{returning:true})
                .then(data=>{
                    res.json(data)
                })
                .catch(err=>{
                    res.json(err)
                })
            }
        })

        
    }

    static list(req,res){
        lembaga.findAll({})
        .then(data=>{
            res.json(data)
        })
        .err(err=>{
            res.json(err)
        })
    }

    static update(req,res){
        const {id}= req.params
        const{jenisLembaga,namaLembaga,provinsiLembaga,kabKotaLembaga,uraianAlamatLembaga} = req.body    
            lembaga.update({jenisLembaga,namaLembaga,provinsiLembaga,kabKotaLembaga,uraianAlamatLembaga},{
                where:{
                    id:id
                }
            })
            .then(data=>{
                res.json({message:"sukses"})
            })
            .catch(err=>{
                res.json(err)
            })
    }

    static listById(req,res){
        const {id}= req.params
        lembaga.findAll({where:{
            id:id
        }})
        .then(data=>{
            res.json({message:"sukses"})
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static delete(req,res){
        const {id}= req.params
        lembaga.destroy({where:{
            id:id
        }})
        .then(data=>{
            res.json({message:"sukses"})
        })
    }
}

module.exports=Controller
