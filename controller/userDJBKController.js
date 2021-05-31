const userDJBK= require('../model/DJBKModel')
const users = require('../model/usersModel')

class Controller{

    static register(req, res){
        const {email,nama,noHp,peran,password}= req.body
       let encryptedPassword =""
        if(password){
         encryptedPassword = bcrypt.hashPassword(password)
       }
        
        users.findAll({
            where:{
                username:username
            }
        }).then(data=>{
            if(data.length){
                res.json({message :"Username Sudah Terdaftar"})
            }
            else{
                
                users.create({email:email,password:encryptedPassword,nama:nama,noHp:noHp,peran:peran}, {returning: true})
                .then(respon =>{
                res.json(respon)
             })
             .catch(err=>{
                 res.json(err)
             })}
        })
         
      }

}


module.exports=Controller