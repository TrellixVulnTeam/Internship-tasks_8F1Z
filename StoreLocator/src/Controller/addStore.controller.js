import addStore from './../Services/addStore.services.js';

const addStoreGet = (req, res) => {
    return res.render('addStore');
}

const addStorePost = async (req, res) => {
    const added = await addStore(req, res);
    if (added) {
        return res.redirect('/stores/dashboard')
    }
    else {
        return res.render('addStore');
    }
}

export { addStoreGet, addStorePost };