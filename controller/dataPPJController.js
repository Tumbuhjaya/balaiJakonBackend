const dataPPJ = require('../model/dataPPJModel')

class Controller{

    static register(req,res){
        const{namaPPJ,provinsiPPJ,kabkotaPPJ,uraianAlamatPPJ} = req.body
        dataPPJ.findAll({where:{
            namaPPJ:namaPPJ
        }})
        .then(hasil=>{
            if(hasil.length){
                res.json({message:"dataPPJ sudah terdaftar"})
            }
            else{
                dataPPJ.create({namaPPJ,provinsiPPJ,kabkotaPPJ,uraianAlamatPPJ},{returning:true})
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
        dataPPJ.findAll({})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static update(req,res){
        const {id}= req.params
        const{namaPPJ,provinsiPPJ,kabkotaPPJ,uraianAlamatPPJ} = req.body    
            dataPPJ.update({namaPPJ,provinsiPPJ,kabkotaPPJ,uraianAlamatPPJ},{
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

    static delete(req,res){
        const {id}= req.params
        dataPPJ.destroy({where:{
            id:id
        }})
        .then(data=>{
            res.json({message:"sukses"})
        })
    }
}

module.exports=Controller
