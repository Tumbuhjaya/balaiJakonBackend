const PJM = require('../model/PJMModel')

class Controller{

    static register(req,res){
        const{namaPJM,provinsiPJM,kabKotaPJM,uraianAlamatPJM,jenisPJM} = req.body
        PJM.findAll({where:{
            namaPJM:namaPJM
        }})
        .then(hasil=>{
            if(hasil.length){
                res.json({message:"PJM sudah terdaftar"})
            }
            else{
                PJM.create({namaPJM,provinsiPJM,kabKotaPJM,uraianAlamatPJM,jenisPJM},{returning:true})
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
        PJM.findAll({})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static update(req,res){
        const {id}= req.params
        const{namaPJM,provinsiPJM,kabKotaPJM,uraianAlamatPJM} = req.body    
            PJM.update({namaPJM,provinsiPJM,kabKotaPJM,uraianAlamatPJM},{
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

    static listByNama(req,res){
        const {namaPJM}= req.params
        PJM.findAll({where:{
            namaPJM:namaPJM
        }})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static listByJenisPJM(req,res){
        const {jenisPJM}= req.params
        PJM.findAll({where:{
            jenisPJM:jenisPJM
        }})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static delete(req,res){
        const {id}= req.params
        PJM.destroy({where:{
            id:id
        }})
        .then(data=>{
            res.json({message:"sukses"})
        })
    }
}

module.exports=Controller
