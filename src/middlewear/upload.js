const util = require("util");
const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(`${__dirname}/../public/image/`));
  },
  filename: (req, file, callback) => {
    let ext = path.extname(file.originalname)
    callback(null,Date.now() + ext)
  }
});

let uploadFile = multer(
    {
        storage:storage,
        fileFilter:(req,file,callback)=>{
            if(
                file.mimetype == 'image/png' ||
                file.mimetype == 'image/jpg'
            ){
                callback(null,true)
            }else{
                console.log('only jpg & png')
                callback(null,false)
            }
        }
    }
)

module.exports = uploadFile