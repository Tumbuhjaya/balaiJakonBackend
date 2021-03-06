const DJBK =require('../model/DJBKModel')

class Controller{

    static all(req,res){
        DJBK.findAll()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static register(req,res){
        const{namaDJBK}= req.body
        DJBK.create({namaDJBK:namaDJBK},{returning:true})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json({message:err})
        })
    }


}

module.exports=Controller