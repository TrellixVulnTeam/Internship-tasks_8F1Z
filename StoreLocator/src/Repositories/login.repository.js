import bcryptjs from "bcryptjs";
import { Sequelize } from "sequelize";
import userModel from "../Models/userModel.js";

const loginCredential = async (emailReq, passwordReq) => {
    const email = await userModel.findOne(
        { where: { email: emailReq } }
    );
    console.log(email);
    if (email != null) {
        console.log(passwordReq);
        console.log(email.password);
        const password = await bcryptjs.compare(passwordReq, email.password);
        console.log("password:"+password);
        if (password) {
            return 'Login Successful';
        }
        else{
            return 'Incorrect Password';
        }
    }
    else{
        return 'Email does not exists';
    }

};

const passwordCorrect = async (emailReq, passwordReq) => {
    const user = await userModel.findOne(
        { where: { email: emailReq } }
    );
    console.log("User:"+user);
    if (user != null) {
        const password = await bcryptjs.compare(passwordReq, user.password);
        console.log("password:"+password);
        if (password != null) {
            return true;
        }
    }
};

export { loginCredential};