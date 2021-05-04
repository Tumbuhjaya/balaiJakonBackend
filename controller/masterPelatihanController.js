const masterPelatihan = require('../model/masterPelatihanModel')
const sq = require('../config/connection')

class Controller{

    static register(req, res){
        const {namaPelatihan,jumlahPeserta,tanggalPelatihan,lokasi,userId}= req.body 
                masterPelatihan.create({namaPelatihan:namaPelatihan,jumlahPeserta:jumlahPeserta,tanggalPelatihan:tanggalPelatihan,lokasi:lokasi,userId:userId}, {returning: true}).then(respon =>{
                res.json(respon)
             })
             .catch(err=>{
                 res.json(err)
             })
        }
        
    static update(req,res){
        const {id}= req.params
        const {namaPelatihan,jumlahPeserta,tanggalPelatihan,lokasi,userId}= req.body
        masterPelatihan.update({
            namaPelatihan:namaPelatihan,
            jumlahPeserta:jumlahPeserta,
            tanggalPelatihan:tanggalPelatihan,
            lokasi:lokasi,
            userId:userId
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
            res.json({data})
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
            res.json({message:err})
        })
    }

    static listByUserId(req,res){
        const{userId}= req.params
        masterPelatihan.findAll({where:{
            userId:userId
        }})
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
            res.json({message:'hapus data sukses'})
        })
        .catch(err=>{
            res.json({message:err})
        })
    }

    static async listPelatihan01(req,res){
       let data = await sq.query(`select * from "masterPelatihans" mp where status = 0 or status = 1 `)
       res.json(data[0])
    }

    static async listPelatihan23(req,res){
        let data = await sq.query(`select * from "masterPelatihans" mp where status = 2 or status = 3 `)
        res.json(data[0])
     }

     static async listPelatihan4(req,res){
        let data = await sq.query(`select * from "masterPelatihans" mp where status = 4`)
        res.json(data[0])
     }
      
}

module.exports=Controller