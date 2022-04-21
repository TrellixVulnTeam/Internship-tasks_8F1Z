import AddStoreModel from "../Models/addStoreModel.js";
import addStoreDB from "../Repositories/addStore.repository.js";

const addStore = async (req, res) => {
    let status;
    console.log("Status.............................................."+req.body.status);
    if(req.body.status=="on"){
        status=true;
    }
    const save = new AddStoreModel({
        "StoreName": req.body.storeName,
        "City": req.body.city,
        "State": req.body.state,
        "Country": req.body.country,
        "PostalCode": req.body.postalCode,
        "Address": req.body.address,
        // "LogoFilePath":,
        "Status": status
    });
    const saved = await addStoreDB(save);
    if (saved) {
        return true;
    }
    else {
        return false;
    }
};

export default addStore;