const express = require('express');
const bcryptjs = require('bcryptjs');

const routes = express.Router();

const userModel = require('../Models/UsersModel');
const postModel = require('../Models/PostsModel');

const { registerUserValidation, loginUserValidation } = require('../validation');

routes.post('/register', async (req, res) => {
    const { error } = registerUserValidation(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const emailExists = await userModel.findOne({ email: req.body.email });
    if (emailExists) return res.status(404).send('You are already registered with us!');

    const salt = await bcryptjs.genSalt(10);
    const passwordEncrypt = await bcryptjs.hash(req.body.password, salt);

    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: passwordEncrypt
    });

    try {
        await user.save();
        res.json({ name: req.body.name, email: req.body.email });
    }
    catch (err) {
        res.json({ error: err });
    }
});

routes.post("/login", async (req, res) => {
    const { error } = loginUserValidation(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const emailExists = await userModel.findOne({ email: req.body.email });
    if (!emailExists) return res.status(404).send("You are not registered with us...Please signup to continue!");

    const password = await bcryptjs.compare(req.body.password, emailExists.password)
    console.log(password);
    if (!password) return res.status(404).send("Invalid password");

    // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    // res.header('auth-token', token).send(token);

    res.send("Login successful!");
});

routes.delete("/deleteOnly/:uid", async (req, res) => {
    try {
        const deletedUser = await userModel.deleteOne({ _id: req.params.uid });
        if (deletedUser) res.json(deletedUser);
    }
    catch (err) {
        res.json(err);
    }
});

routes.delete("/deleteAll/:uid", async (req, res) => {
    try {
        const deletedUser = await userModel.remove({ _id: req.params.uid });
        const deletedPostOfUser = await postModel.deleteMany({ userID: req.params.uid });
        res.json({deletedUser,deletedPostOfUser});
    }
    catch (err) {
        res.json(err);
    }
});

module.exports = routes;