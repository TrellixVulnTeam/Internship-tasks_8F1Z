import AddStoreModel from '../Models/addStoreModel.js';

const stores = async () => {
    const stores = await AddStoreModel.find();
    return stores;
};

const deleteSt = async (id) => {
    await AddStoreModel.remove({ _id: id });
    return await AddStoreModel.find();
};

const update = async (req) => {
    const updated = await AddStoreModel.updateOne({ _id: req.body.id }, {
        $set: {
            StoreName: req.body.storeName,
            City: req.body.city,
            State: req.body.state,
            Country: req.body.country,
            PostalCode: req.body.postalCode,
            Address: req.body.address,
            Status: req.body.status
        }
    });
    if (updated) {
        const stores = await AddStoreModel.find();
        return stores;
    }
};

export { stores, deleteSt, update };