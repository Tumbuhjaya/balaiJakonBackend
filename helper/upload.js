var multer  = require('multer')


const storage = multer.diskStorage({
    destination:'./Asset/Images/',
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
         //console.log(file)
    }
})

const upload=multer({
    storage:storage
}).single('file')

module.exports = upload