import addStore from './../Services/addStore.services.js';
import { filePath } from '../middlewares/fileUpload.js';

const addStoreGet = (req, res) => {
    return res.render('addStore');
}

const addStorePost = async (req, res) => {
    console.log(filePath);
    const added = await addStore(req, res, filePath);
    if (added) {
        return res.redirect('/stores/dashboard')
    }
    else {
        return res.render('addStore');
    }
}

export { addStoreGet, addStorePost };