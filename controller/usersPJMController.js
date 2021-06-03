const usersPJM = require('../model/usersPJMModel')
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
                usersPJM.create({userId:respon.dataValues.id})
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
          const {nama,noHp,namaPerusahaan,provinsiAlamatPerusahaan,kabKotaAlamatPerusahaan,uraianAlamatDomisili,jabatan}= req.body

            users.update({nama,noHp},{where:{
                id:req.dataUsers.id
            }})
            .then(data1=>{
                usersPJM.update({namaPerusahaan,provinsiAlamatPerusahaan,kabKotaAlamatPerusahaan,uraianAlamatDomisili,jabatan},{where:{
                    userId:req.dataUsers.id
                }})
                .then(data2=>{
                    res.json({message:"sukses"})
                })
            })
            .catch(err=>{
                res.json({message:err})
            })
      }

      static async profile(req,res){
        let data = await sq.query(`select * from users u join "usersPJMs" ud on u.id = ud."userId" where u.id=${req.dataUsers.id} `)
        res.json(data[0])
      }

}


module.exports=Controller