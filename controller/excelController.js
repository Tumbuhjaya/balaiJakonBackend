const provinsi = require('../model/provinsiModel')
const kabKota = require('../model/kabKotaModel')
const importExcel= require('convert-excel-to-json')
const DJBK = require('../model/DJBKModel')
const del = require('del')


class Controller{
    
    static insertProvinsi(req,res){
        let file = req.files.excelFile;
        let namafile = Date.now() + file.name
        

        file.mv('./Asset/excel/'+namafile,(async err=>{
            if(err){
                res.json(err)
            }
            else{
                let result =  await importExcel({
                    sourceFile :'./Asset/excel/'+namafile,
                    header     :   {rows:1},
                    columnToKey:{B:'namaProvinsi'},
                    sheets :['Sheet1']
                    
                });
              

                provinsi.bulkCreate(result.Sheet1,{ignoreDuplicates:true})
                .then(data=>{
                    console.log("aye")
                    del(['./Asset/excel/']+namafile)
                   res.json({message :"sukses"})
                })
                .catch(err=>{
                    res.json(err)
                })
                
                
            }
        }))
    }

    static insertKabKota(req,res){
        let file = req.files.excelFile;
        let namafile = Date.now() + file.name
        

        file.mv('./Asset/excel/'+namafile,(async err=>{
            if(err){
                res.json(err)
            }
            else{
                let result =  await importExcel({
                    sourceFile :'./Asset/excel/'+namafile,
                    header     :   {rows:1},
                    columnToKey:{B:'namaKabKota',C:'provinsiId'},
                    sheets :['Sheet1']
                    
                });
              

                kabKota.bulkCreate(result.Sheet1,{ignoreDuplicates:true})
                .then(data=>{
                    console.log("aye")
                    del(['./Asset/excel/']+namafile)
                   res.json({message :"sukses"})
                })
                .catch(err=>{
                    res.json(err)
                })
            }
        }))
    }

    static insertDJBK(req,res){
        let file = req.files.excelFile;
        let namafile = Date.now() + file.name
        

        file.mv('./Asset/excel/'+namafile,(async err=>{
            if(err){
                res.json(err)
            }
            else{
                let result =  await importExcel({
                    sourceFile :'./Asset/excel/'+namafile,
                    header     :   {rows:1},
                    columnToKey:{A:'namaDJBK'},
                    sheets :['Sheet1']
                    
                });
              

                DJBK.bulkCreate(result.Sheet1,{ignoreDuplicates:true})
                .then(data=>{
                    console.log("aye")
                    del(['./Asset/excel/']+namafile)
                   res.json({message :"sukses"})
                })
                .catch(err=>{
                    res.json(err)
                })
            }
        }))
    }
}

module.exports=Controller