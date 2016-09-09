const multer = require('multer'),
    md5 = require('md5'),
    config = require('../../config')

let storageMermory =multer.memoryStorage()
let storageDisk = multer.diskStorage({
    destination:config.upload_path,
    filename:(req,file,cb)=>{
        let fileFormat = file.originalname.split('.')
        cb(null,file.fieldname+'-'+md5(file)+'.'+fileFormat[fileFormat.length-1])
    }
})

var upload = multer({
    storage:storageDisk
})
module.exports = upload



