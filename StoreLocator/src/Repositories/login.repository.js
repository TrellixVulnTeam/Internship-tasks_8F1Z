import bcryptjs from "bcryptjs";
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
        return 'Email does not exists'; //express validator winstorlogger nodejs lifecycle
    }

};

export { loginCredential};