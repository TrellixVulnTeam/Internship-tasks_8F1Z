const addStoreDB = async (save) => {
    const saved = await save.save();
    if (saved) {
        return true;
    }
    else {
        return false;
    }
}

export default addStoreDB;