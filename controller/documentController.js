const document = require('../model/documentModel')

class Controller{
    static register(req, res){
        const {jenisDocument}= req.body
                document.create({namaDocument:req.file.filename,jenisDocument:jenisDocument,userId:req.dataUsers.id}, {returning: true}).then(respon =>{
                res.json(respon)
             })
             .catch(err=>{
                 res.json(err)
             })
        }

    static listDocumentByUser(req,res){
        document.findAll({where:{
            userId:req.dataUsers.id
        }})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static download(req,res){
        const {id}= req.params
        // const path = "/Asset/Images/"
    document.findAll({where:{
        id:id
    }
    })
    .then(data=>{
        console.log(data[0].dataValues.namaDocument)
        res.download('./Asset/Images/'+data[0].dataValues.namaDocument)
    })
 }
        
}


module.exports=Controller