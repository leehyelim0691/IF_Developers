const multer = require('multer');
const moment = rerquire('moment');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads');
  },
  filename : function(req,file,cb){
    cb(null, 'newJson.json');
  }
});

const upload = multer({storage:stroage}).single("file");

module.exports = upload;