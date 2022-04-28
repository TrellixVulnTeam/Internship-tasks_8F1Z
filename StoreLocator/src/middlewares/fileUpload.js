import multer from 'multer';
import path from 'path';

let filePath;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../StoreLocator/src/public/Login_v15/images');
    },
    filename: function (req, file, cb) {
        console.log("multer......");
        console.log(file.originalname);
        filePath = Date.now() + path.extname(file.originalname);
        cb(null, filePath);
    }
});

const upload = multer({ storage: storage });

export { upload, filePath };