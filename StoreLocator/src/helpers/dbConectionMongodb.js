import mongoose from 'mongoose';
import { } from 'dotenv/config';

const mongooseConnect = () => {
    mongoose.connect(process.env.CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('connected');
        }
    });
    next();
};

export default mongooseConnect;