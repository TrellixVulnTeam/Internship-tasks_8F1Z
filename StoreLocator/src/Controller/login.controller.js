import login from './../Services/login.services.js'
const loginGet = (req,res) => {
    return res.render('login');
};

const loginPost = async (req,res) => {
    const loginDetails=await login(req);
    if(loginDetails=='Email does not exists'){
        const emailIncorrect={email:true};
        console.log(loginDetails);
        return res.status(404).render('login',{emailIncorrect});
    }
    else if(loginDetails=='Incorrect Password'){
        const passwordIncorrect={password:true};
        console.log("passController"+loginDetails);
        return res.status(404).render('login',{passwordIncorrect});
    }
    else{
        const logined={success:true};
        console.log(loginDetails);
        return res.status(200).redirect('stores/dashboard');
        // return res.status(200).render('login',{logined});
    }
};

export {loginGet ,loginPost};