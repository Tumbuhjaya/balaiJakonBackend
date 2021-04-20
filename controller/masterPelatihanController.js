const masterPelatihan = require('../model/masterPelatihanModel')


class Controller{

    static register(req, res){
        const {namaPelatihan,jumlahPeserta,tanggalPelatihan}= req.body 
                masterPelatihan.create({namaPelatihan:namaPelatihan,jumlahPeserta:jumlahPeserta,tanggalPelatihan:tanggalPelatihan}, {returning: true}).then(respon =>{
                res.json(respon)
             })
             .catch(err=>{
                 res.json(err)
             })
        }
        
    static update(req,res){
        const {id}= req.params
        const {namaPelatihan,jumlahPeserta,tanggalPelatihan}= req.body
        masterPelatihan.update({
            namaPelatihan:namaPelatihan,
            jumlahPeserta:jumlahPeserta,
            tanggalPelatihan:tanggalPelatihan
        },{
            where:{
                id:id
            },
            returning: true,
        })
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static changeStatus(req,res){
        const {id}= req.params
        const {status}= req.body
        masterPelatihan.update({
            status:status
        },{
            where:{
                id:id
            },
            returning: true,
        })
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static list(req,res){
        masterPelatihan.findAll({})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static listById(req,res){
        const {id}= req.params
        masterPelatihan.findAll({
            where:{
                id:id
            }
        })
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static delete(req,res){
        const {id} = req.params
        masterPelatihan.destroy({
            where:{
                id:id
            }
        })
        .then(data=>{
            res.json("data telah berhasil di hapus")
        })
        .catch(err=>{
            res.json(err)
        })
    }
      
}

module.exports=Controller