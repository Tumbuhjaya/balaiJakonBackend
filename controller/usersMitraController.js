const usersMitra = require('../model/usersMitraModel')
const users = require('../model/usersModel')
const sq = require('../config/connection')
const bcrypt = require('../helper/bcrypt')

class Controller{

    static register(req, res){
        const {email,nama,noHp,role,password}= req.body
       let encryptedPassword =""
        if(password){
         encryptedPassword = bcrypt.hashPassword(password)
       }
        
        users.findAll({
            where:{
                email:email
            }
        }).then(data=>{
            if(data.length){
                res.json({message :"email Sudah Terdaftar"})
            }
            else{                
                users.create({email:email,password:encryptedPassword,nama:nama,noHp:noHp,role:role}, {returning: true})
                .then(respon =>{
                    console.log(respon.dataValues.id)
                usersMitra.create({userId:respon.dataValues.id})
                .then(respon2=>{
                    res.json({message:"sukses"})
                })
             })
             .catch(err=>{
                 res.json(err)
             })}
        })
         
      }

      static update(req,res){
          const {nama,noHp,lembaga,provinsiAlamatLembaga,kabKotaAlamatLembaga,uraianAlamatLembaga,jabatan,jenisLembaga}= req.body

            users.update({nama,noHp})
            .then(data1=>{
                usersMitra.update({lembaga,provinsiAlamatLembaga,kabKotaAlamatLembaga,uraianAlamatLembaga,jabatan,jenisLembaga})
                .then(data2=>{
                    res.json({message:"sukses"})
                })
            })
            .catch(err=>{
                res.json({message:err})
            })
      }

      static async profile(req,res){
        let data = await sq.query(`select * from users u join "usersMitras" ud on u.id = ud."userId" where u.id=${req.dataUsers.id} `)
        res.json(data[0])
      }

}


module.exports=Controller