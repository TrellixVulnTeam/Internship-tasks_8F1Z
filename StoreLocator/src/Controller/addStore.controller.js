import addStore from './../Services/addStore.services.js';
import { filePath } from '../middlewares/fileUpload.js';
import storeFormVal from '../Utils/storeFormValidation.js';
import { validationResult } from 'express-validator';

const addStoreGet = (req, res) => {
    return res.render('addStore');
}

const addStorePost = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        const errMsg = storeFormVal(error);
        return res.render('addStore', { errMsg, req });
    }
    const added = await addStore(req, res, filePath);
    if (added) {
        return res.redirect('/stores/dashboard')
    }
    else {
        return res.render('addStore');
    }
}

export { addStoreGet, addStorePost };