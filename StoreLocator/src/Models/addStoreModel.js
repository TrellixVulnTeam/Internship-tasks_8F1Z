import mongoose from 'mongoose';

const AddStoreModel = mongoose.Schema({
    StoreName: {
        required: true,
        type: String,
    },
    Country: {
        required: true,
        type: String,
    },
    City: {
        required: true,
        type: String,
    },
    State: {
        required: true,
        type: String,
    },
    PostalCode: {
        required: true,
        type: String,
    },
    Address: {
        required: true,
        type: String,
    },
    Status: {
        required: true,
        default: false,
        type: Boolean
    }
});

export default mongoose.model('AddStoreModel',AddStoreModel);