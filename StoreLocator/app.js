import express from 'express';
import bcryptjs from 'bcryptjs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { } from 'dotenv/config';
import session from 'express-session';
//require('dotenv').config();

import sequelize from './src/helpers/databaseConnection.js';
import userModel from './src/Models/userModel.js';
import loginRoute from './src/Routes/login.routes.js';
import storeRoute from './src/Routes/stores.routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_KEY,
    resave: true,
    saveUninitialized: true
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.use(express.static('./src/public'));

app.use('/login', loginRoute);
app.use('/stores', storeRoute);

mongoose.connect(process.env.CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('connected');
    }
});

sequelize.sync({ force: true })
    .then((result) => {
        const salt = bcryptjs.genSalt(10);
        salt.then(result => {
            return bcryptjs.hash(process.env.ADMIN_PASSWORD, result);
        })
            .then(hashedPwd => {
                userModel.create({ email: "admin@gmail.com", password: hashedPwd });
            })
    })
    .catch((err) => {
        console.log(err)
    });

app.listen(process.env.PORT, (result) => {
    console.log("listening" + process.env.PORT)
});