const usersDJBK = require('../model/usersDJBKModel')
const users = require('../model/usersModel')
const bcrypt = require('../helper/bcrypt')
const jwt = require('../helper/jwt')

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
                usersDJBK.create({userId:respon.dataValues.id})
                .then(respon2=>{
                    res.json({message:"sukses"})
                })
             })
             .catch(err=>{
                 res.json(err)
             })}
        })
         
      }

}


module.exports=Controller