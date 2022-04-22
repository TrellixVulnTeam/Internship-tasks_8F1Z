import { storeFetch, deleteStoreService, updateStore } from "../Services/storeDashboard.services.js";

const storeFetchApi = async (req, res) => {
    const stores = await storeFetch();
    if (stores) {
        res.json(stores);
    }
};

const deleteStoreApi = async (req, res) => {
    const stores = await deleteStoreService(req.body.id);
    if (stores) {
        res.json(stores);
    }
};

const updateStoreApi = async (req, res) => {
    const stores = await updateStore(req);
    if (stores) {
        res.json(stores);
    }
};

export { storeFetchApi, deleteStoreApi, updateStoreApi };