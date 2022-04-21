import { loginCredential } from "../Repositories/login.repository.js";

const login = async (req) => {
    let loginDetails = await loginCredential(req.body.email, req.body.password);
    if (loginDetails=='Email does not exists') {
        return 'Email does not exists';
    }
    if(loginDetails=='Incorrect Password'){
        return 'Incorrect Password';
    }
    if(loginDetails=='Login Successful'){
        return 'Login Successful';
    }
};

export default login;