const sertifikatTKK = require('../model/sertifikatTKKModel')

class Controller{

    static register(req,res){
        const{lingkupLevelJabatan,tanggalTerbit,tanggalBerlaku,lembagaPenerbit}= req.body
        console.log(req.body)
        sertifikatTKK.create({lingkupLevelJabatan,tanggalTerbit,tanggalBerlaku,lembagaPenerbit,dokumen:req.file.filename,userId:req.dataUsers.id})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}

module.exports=Controller