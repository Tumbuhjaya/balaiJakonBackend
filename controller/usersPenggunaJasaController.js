const usersPenggunaJasa= require('../model/usersPenggunaJasaModel')
const bcrypt = require('../helper/bcrypt')
const users = require('../model/usersModel')


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
                   
                    usersPenggunaJasa.create({userId:respon.dataValues.id})
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
        const {nama,noHp,organisasi,provinsiAlamatOrganisasi,kabKotaAlamatOrganisasi,uraianAlamatUnitKerja,jenisOrganisasi}= req.body

          users.update({nama:nama,noHp:noHp})
          .then(data1=>{
            usersPenggunaJasa.update({organisasi,provinsiAlamatOrganisasi,kabKotaAlamatOrganisasi,uraianAlamatUnitKerja,jenisOrganisasi})
              .then(data2=>{
                  res.json({message:"sukses"})
              })
          })
          .catch(err=>{
              res.json({message:err})
          })
    }

    static async profile(req,res){
      let data = await sq.query(`select * from users u join "usersPenggunaJasas" ud on u.id = ud."userId" where u.id=${req.dataUsers.id} `)
      res.json(data[0])
    }
}

module.exports=Controller