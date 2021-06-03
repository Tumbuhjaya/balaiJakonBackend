const pengalamanKerja = require('../model/pengalamanKerjaModel')

class Controller{

    static register(req,res){
        const{namaPekerjaan,statusKerja,namaPerusahaan,tanggalMulai,tanggalSelesai,uraianPeran,penghasilanPerBulan}= req.body
    
        pengalamanKerja.create({namaPekerjaan,statusKerja,namaPerusahaan,tanggalMulai,tanggalSelesai,uraianPeran,penghasilanPerBulan,suratKeteranganKerja:req.file.filename,userId:req.dataUsers.id})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }



    static update(req,res){
        const{id,namaPekerjaan,statusKerja,namaPerusahaan,tanggalMulai,tanggalSelesai,uraianPeran,penghasilanPerBulan}= req.body
        pengalamanKerja.update({namaPekerjaan,statusKerja,namaPerusahaan,tanggalMulai,tanggalSelesai,uraianPeran,penghasilanPerBulan},{where:{
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
        pengalamanKerja.findAll({where:{
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
        pengalamanKerja.destroy({where:{
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