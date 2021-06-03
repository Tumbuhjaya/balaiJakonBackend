const sertifikatTKK = require('../model/sertifikatTKKModel')

class Controller{

    static register(req,res){
        const{lingkupLevelJabatan,tanggalTerbit,tanggalBerlaku,lembagaPenerbit}= req.body
    
        sertifikatTKK.create({lingkupLevelJabatan,tanggalTerbit,tanggalBerlaku,lembagaPenerbit,dokumen:req.file.filename,userId:req.dataUsers.id})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }


    static verifikasi(req,res){
        const{id,statusVerifikasi} = req.body
        sertifikatTKK.update({statusVerifikasi},{where:{
            id:id
        }})
        .then(data=>{
            res.json({message:"sukses"})
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static update(req,res){
        const{id,lingkupLevelJabatan,tanggalTerbit,tanggalBerlaku,lembagaPenerbit}= req.body
        sertifikatTKK.update({lingkupLevelJabatan,tanggalTerbit,tanggalBerlaku,lembagaPenerbit},{where:{
            id:id
        }})
        .then(data=>{
            res.json({message:"sukses"})
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static listByUser(req,res){
        sertifikatTKK.findAll({where:{
            userId:req.dataUsers.id
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