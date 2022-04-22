import { stores, deleteSt, update } from "../Repositories/storeDashboard.repository.js";

const storeFetch = async () => {
    return await stores();
};

const deleteStoreService = async (id) => {
    const stores = await deleteSt(id);
    return stores;
};

const updateStore = async (req) => {
    const stores = await update(req);
    return stores;
};

export { storeFetch, deleteStoreService, updateStore };