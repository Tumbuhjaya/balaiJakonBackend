const pengalamanMengajar = require('../model/pengalamanMengajarModel')

class Controller{

    static register(req,res){
        const{bidang,subBidang,materi,tanggalMulai,tanggalSelesai}= req.body
        let x = ""
        if (req.file.filename){
            x=req.file.filename
        }
        pengalamanMengajar.create({bidang,subBidang,materi,tanggalMulai,tanggalSelesai,suratKeteranganMengajar:x,userId:req.dataUsers.id})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static editFile(req, res) {
        const{id}= req.body
        pengalamanMengajar.update(
            { suratKeteranganMengajar: req.file.filename },
            {
              where: {
                id: id,
              },
            }
          )
          .then((data) => {
            res.json({ message: "sukses" });
          })
          .catch((err) => {
            res.json({message:err});
          });
      }

    static update(req,res){
        const{id,bidang,subBidang,materi,tanggalMulai,tanggalSelesai}= req.body
        pengalamanMengajar.update({bidang,subBidang,materi,tanggalMulai,tanggalSelesai},{where:{
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
        pengalamanMengajar.findAll({where:{
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
        pengalamanMengajar.destroy({where:{
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