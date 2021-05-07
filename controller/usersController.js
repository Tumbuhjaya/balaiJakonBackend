const users = require('../model/usersModel')
const bcrypt = require('../helper/bcrypt')
const jwt = require('../helper/jwt')
const poolPelatihan = require('../model/poolPelatihanModel')
const sq = require('../config/connection')





function createSuperUser() {
    let adminpass = bcrypt.hashPassword("balaiJakon")
    users.findOrCreate({

        where: {
            username: "balaiJakon"
        },
        defaults: {
            password: adminpass,
            role : "superuser"
        }
    })
}
createSuperUser()

class Controller {

    static register(req, res){
        const {username,password,role,nama,alamat,noHp,tempatLahir,tanggalLahir,noKTP,email}= req.body
        let encryptedPassword = bcrypt.hashPassword(password)
        users.findAll({
            where:{
                username:username
            }
        }).then(data=>{
            if(data.length){
                res.json({message :"Username Sudah Terdaftar"})
            }
            else{
                
                users.create({username:username, password:encryptedPassword,nama:nama,alamat:alamat,role:role,noHp:noHp,tempatLahir:tempatLahir,tanggalLahir:tanggalLahir,noKTP:noKTP,email:email}, {returning: true}).then(respon =>{
                res.json(respon)
             })
             .catch(err=>{
                 res.json(err)
             })}
        })
         
      }

      static registerToPelatihan(req,res){
        const {username,password,role,nama,alamat,noHp,tempatLahir,tanggalLahir,noKTP,email,masterPelatihanId}= req.body
        let encryptedPassword = bcrypt.hashPassword(password)
          users.findAll({where:{
              username:username
          }})
          .then(data=>{
              if(data.length){
                  res.json({message:"Username Sudah Terdaftar"})
              }
              else{
                  users.create({username:username, password:encryptedPassword,nama:nama,alamat:alamat,role:role,noHp:noHp,tempatLahir:tempatLahir,tanggalLahir:tanggalLahir,noKTP:noKTP,email:email},{returning:true})
                  .then(data2=>{
                      poolPelatihan.create({userId:data2.dataValues.id,masterPelatihanId:masterPelatihanId})
                      .then(data3=>{
                          res.json({message:'sukses'})
                      })
                  })
              }
          })
          .catch(err=>{
              res.json({message:err})
          })
      }

      static login(req,res){
        const{username,password}= req.body
        users.findAll({
            where:{
                username:username
            }
        })
        .then(data=>{
            if(data.length){
        let hasil =  bcrypt.compare(password, data[0].dataValues.password);
                if(hasil){
                    res.json([{token : jwt.generateToken(data[0].dataValues)},{id:data[0].id},{role:data[0].role}])
                }
                else{
                    res.json({message : "password salah"})
                }
            }
            else{res.json({message :"username tidak terdaftar"})}
        })
        .catch(err=>{
            res.json({message : err})
        })
    }

    static approval(req,res){
        const {id} =req.params
        users.update({
            approval:1
        },
        {
        where:{
            id:id
        }
        })
        .then(data=>{
            res.json('Update Sukses')
        })
        .catch(err=>{
            res.json('err')
        })
    }

    static list (req,res){
        users.findAll({})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static details(req,res){
        const{id}= req.params
        users.findAll({where:{
            id:id
        }})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static delete (req,res){
        const {id}= req.params
        users.destroy({
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

    static async listPeserta(req,res){
        let data = await sq.query(`select * from users u where u."role" ='peserta'or u."role" ='guest'`)
        res.json(data[0])
    }

    static async listPesertaByRole(req,res){
        const {role}= req.params
        let data = await sq.query(`select * from users u where u."role" ='${role}'`)
        res.json(data[0])
    }

    static async listPesertaPelatihan(req,res){
        const{masterPelatihanId}= req.params
        let data = await sq.query(`select u.* from users u where u.id not in(select pp."userId" from "poolPelatihans" pp where pp."masterPelatihanId" =${masterPelatihanId})`)
        res.json(data[0])
    }

}


module.exports = Controller