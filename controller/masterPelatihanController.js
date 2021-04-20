const masterPelatihan = require('../model/masterPelatihanModel')


class Controller{

    static register(req, res){
        const {namaPelatihan,jumlahPeserta,status,tanggalPelatihan}= req.body 
                masterPelatihan.create({namaPelatihan:namaPelatihan,jumlahPeserta:jumlahPeserta,status:status,tanggalPelatihan:tanggalPelatihan}, {returning: true}).then(respon =>{
                res.json(respon)
             })
             .catch(err=>{
                 res.json(err)
             })
        }   
      
}

module.exports=Controller