const provinsi =require('../model/provinsiModel')

class Controller{

    static all(req,res){
        provinsi.findAll()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}

module.exports=Controller