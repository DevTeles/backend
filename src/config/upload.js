const multer = require('multer');

const path = require('path');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb) { //cb eh de callback
            cb(null, file.originalname);
        }
    })   
};