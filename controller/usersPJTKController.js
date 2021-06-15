const usersPJTK = require('../model/usersPJTKModel')
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
                usersPJTK.create({userId:respon.dataValues.id})
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
          const {nama,noHp,noKTP,tanggalLahir,provinsiDomisili,kabKotaDomisili,uraianAlamatDomisili,pendidikanTertinggi,pendapatanPerbulan,statusPekerjaan,namaPerusahaan}= req.body

            users.update({nama:nama,noHp:noHp},{where:{
                id:req.dataUsers.id
            }})
            .then(data1=>{
                usersPJTK.update({noKTP,tanggalLahir,provinsiDomisili,kabKotaDomisili,uraianAlamatDomisili,pendidikanTertinggi,pendapatanPerbulan,statusPekerjaan,namaPerusahaan},{where:{
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
        let data = await sq.query(`select * from users u join "usersPJTKs" ud on u.id = ud."userId" where u.id=${req.dataUsers.id} `)
        res.json(data[0])
      }

      static uploadKTP(req, res) {
        usersPJTK
          .update(
            { fotoKTP: req.file.filename },
            {
              where: {
                userId: req.dataUsers.id,
              },
            }
          )
          .then((data) => {
            res.json({ message: "update foto sukses" });
          })
          .catch((err) => {
            res.json({message:err});
          });
      }

}


module.exports=Controller