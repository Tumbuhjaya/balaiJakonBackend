const pendidikanPelatihan = require('../model/pendidikanPelatihanModel')

class Controller{

    static register(req,res){
        const{namaPendidikan,tanggalMulai,tanggalSelesai}= req.body
    
        pendidikanPelatihan.create({namaPendidikan,tanggalMulai,tanggalSelesai,uploadSKP:req.file.filename,userId:req.dataUsers.id})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }



    static update(req,res){
        const{id,namaPendidikan,tanggalMulai,tanggalSelesai}= req.body
        pendidikanPelatihan.update({namaPendidikan,tanggalMulai,tanggalSelesai},{where:{
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
        pendidikanPelatihan.findAll({where:{
            userId:req.dataUsers.id
        }})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static delete(req,res){
        const {id}= req.body
        pendidikanPelatihan.destroy({where:{
            id:id
        }})
        .then(data=>{{
            res.json({message:"sukses"})
        }})
        .catch(err=>{
            res.json({message:err})
        })
    }
}

module.exports=Controller