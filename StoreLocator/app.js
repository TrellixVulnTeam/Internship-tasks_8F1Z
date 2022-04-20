import express from 'express';
import bcryptjs  from 'bcryptjs';
import {} from 'dotenv/config'
//require('dotenv').config();

import sequelize from './src/helpers/databaseConnection.js';
import userModel from './src/Models/userModel.js';

const app = express();



sequelize.sync({force:true})
    .then((result) => {
        const salt = bcryptjs.genSalt(10);
        salt.then(result => {
            return bcryptjs.hash(process.env.ADMIN_PASSWORD, result);
        })
            .then(hashedPwd => {
                userModel.create({ email: "admin", password: hashedPwd });
            })
    })
    .catch((err) => {
        console.log(err)
    });

app.listen(process.env.PORT, (result) => {
    console.log("listening"+process.env.PORT)
});