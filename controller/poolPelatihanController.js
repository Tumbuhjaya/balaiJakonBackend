const poolPelatihan = require('../model/poolPelatihanModel')
const users = require('../model/usersModel')
const masterPelatihan = require('../model/masterPelatihanModel')
const sq = require('../config/connection')


class Controller {
    static register(req, res){
        const {userId,masterPelatihanId}= req.body 
                poolPelatihan.create({userId:userId,masterPelatihanId:masterPelatihanId,status:1}, {returning: true}).then(respon =>{
                res.json(respon)
             })
             .catch(err=>{
                 res.json(err)
             })
        }

    static join(req, res){
        const {masterPelatihanId}= req.body 
                poolPelatihan.create({userId:req.dataUsers.id,masterPelatihanId:masterPelatihanId,status:0}, {returning: true}).then(respon =>{
                res.json(respon)
             })
             .catch(err=>{
                 res.json(err)
             })
        }

    static update(req,res){
        const {id}= req.params
        const {userId,masterPelatihanId}= req.body
        poolPelatihan.update({
            usersId:userId,
            masterPelatihanId:masterPelatihanId
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

    // static listByUser(req,res){
    //     const {userId}=req.params
    //     poolPelatihan.findAll({
    //         where:{
    //             userId:userId
    //         },
    //         include:[{model:users},{model:masterPelatihan}]
    //     })
    //     .then(data=>{
    //         res.json(data)
    //     })
    //     .catch(err=>{
    //         res.json(err)
    //     })
    // }

    static async listByUser(req,res){
        const {userId}=req.params
        let data =  await sq.query(`select mp."namaPelatihan" ,mp."jumlahPeserta" ,mp."tanggalPelatihan" ,mp.status from "poolPelatihans" pp join "masterPelatihans" mp on pp."masterPelatihanId" = mp.id  where pp."userId" =${userId}`);
        res.json(data[0])
    }

    static delete (req,res){
        const {id}= req.params
        poolPelatihan.destroy({
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

module.exports = Controller