import { storeFetch, deleteStoreService, updateStore } from "../Services/storeDashboard.services.js";
import { validationResult } from "express-validator";
import storeFormVal from "../Utils/storeFormValidation.js";

const storeFetchApi = async (req, res) => {
    const stores = await storeFetch();
    if (stores) {
        return res.status(200).send(stores);  //send is generalization and json is specialization
    }
};

const deleteStoreApi = async (req, res) => {
    const stores = await deleteStoreService(req.body.id);
    if (stores) {
        return res.status(200).json(stores);
    }
};

const updateStoreApi = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        const errMsg = storeFormVal(error,req);
        console.log(errMsg);
        return res.status(403).json(errMsg);
    }
    const stores = await updateStore(req);
    if (stores) {
        return res.status(200).json(stores);
    }
};

export { storeFetchApi, deleteStoreApi, updateStoreApi };