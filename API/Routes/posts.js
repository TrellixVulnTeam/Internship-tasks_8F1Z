const express = require("express");
const routes = express.Router();

const { postValidation } = require("../validation");

const postModel = require("../Models/PostsModel");

routes.post("/:id", async (req, res) => {
    const { error } = postValidation(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const post = new postModel({
        "userID": req.params.id,
        "title": req.body.title,
        "description": req.body.description
    });

    try {
        await post.save();
        return res.json({
            "userID": req.params.id,
            "title": req.body.title,
            "description": req.body.description
        });
    }
    catch (err) {
        return res.json({ "error": err });
    }
});

routes.get("/:id", async (req, res) => {
    try {
        const posts = await postModel.find({ "userID": req.params.id });
        res.json(posts);
    }
    catch (err) {
        res.json(err);
    }
});

//The below code also works on patch
routes.put("/update/:uid/:pid", async (req, res) => {
    try {
        const updated = await postModel.updateOne({ _id: req.params.pid, userID: { $eq: req.params.uid } }, {
            $set: {
                title: req.body.title,
                description:req.body.description
            }
        })
        res.json(updated);
    }
    catch (err) {
        res.json(err);
    }
});

routes.delete("/delete/:uid/:pid", async (req, res) => {
    try {
        const deletedPost = await postModel.deleteOne({ "userID": req.params.uid }, { "_id": req.params.pid });
        if (deletedPost) res.json({ "deleted": deletedPost });
    }
    catch (err) {
        res.json(err);
    }
});

module.exports = routes;