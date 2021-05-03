const document = require('../model/documentModel')

class Controller{
    static register(req, res){
        const {jenisDocument}= req.body
                document.create({namaDocument:req.file.filename,jenisDocument:jenisDocument,userId:req.dataUsers.id}, {returning: true}).then(respon =>{
                res.json(respon)
             })
             .catch(err=>{
                 res.json(err)
             })}
        
}


module.exports=Controller